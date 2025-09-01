<?php

/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip;

use TutorLMSDroip\ElementGenerator\CourseMetaGenerator;
use TutorLMSDroip\ElementGenerator\ThumbnailGenerator;
use Tutor\Ecommerce\CartController;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Class Forntend
 */
class Hooks
{

    use CourseMetaGenerator;
    use ThumbnailGenerator;

    public function __construct()
    {
        add_filter('droip_post_types', [$this, 'droip_post_types'], 10, 1);
        add_filter('droip_collection_TUTOR_LMS_COURSES', [$this, 'droip_collection_TUTOR_LMS_COURSES'], 10, 2);
        add_filter('droip_collection_TUTOR_LMS_CURRICULUM', [$this, 'droip_collection_TUTOR_LMS_CURRICULUM'], 10, 2);
        add_filter('droip_collection_TUTOR_LMS_CART', [$this, 'droip_collection_TUTOR_LMS_CART'], 10, 2);
        add_filter('droip_dynamic_content', [$this, 'droip_dynamic_content'], 10, 2);
        add_filter('droip_comment-TUTOR_LMS-tutor_q_and_a', [$this, 'modify_qna_comment_data']);
        add_filter('droip_comment-TUTOR_LMS-tutor_course_rating', [$this, 'modify_rating_comment_data']);
        add_filter('droip_comment_added-TUTOR_LMS-tutor_q_and_a', [$this, 'qna_comment_added']);
        add_filter('droip_comment_added-TUTOR_LMS-tutor_course_rating', [$this, 'rating_comment_added']);
        add_filter('droip_visibility_condition_fields', [VisibilityCondition::class, 'visibility_condition_fields'], 10, 2);
        add_filter('droip_visibility_condition_check_' . TDE_APP_PREFIX, [VisibilityCondition::class, 'element_visibility_condition_check'], 10, 3);

        add_filter('droip_dynamic_content_fields', [$this, 'modify_droip_dynamic_content_fields'], 10, 2);
        add_filter('droip_external_collection_options', [$this, 'modify_external_collection_options'], 10, 2);
        add_filter('droip_external_collection_item_type', [$this, 'get_tutor_item_types'], 10, 2);
    }

    public function modify_droip_dynamic_content_fields($fields, $collection_data)
    {
        if (isset($collection_data['collectionType'], $collection_data['type']) && $collection_data['collectionType'] === 'posts' && $collection_data['type'] === 'courses') {
            if (isset($fields['typeValues'], $fields['typeValues']['content'])) {
                foreach ($fields['typeValues']['content'] as $key => $value) {
                    if ($value['value'] === 'post') {
                        $fields['typeValues']['content'][$key]['title'] = 'Course';
                    }
                }
            }
        }
        return $fields;
    }

    public function modify_external_collection_options($options, $args)
    {
        $type           = $args['type'];
        $collectionType = $args['collectionType'];

        $courses_group = [
            'title'               => 'Course',
            'value'               => 'TUTOR_LMS_COURSES',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-topics",
            'group'               => [
                ['title' => 'Curriculum', 'value' => "TUTOR_LMS-topics", 'itemType' => 'post'],
                ['title' => 'Reviews', 'value' => "TUTOR_LMS-tutor_course_rating", 'itemType' => 'comment'],
                ['title' => 'Q & A', 'value' => "TUTOR_LMS-tutor_q_and_a", 'itemType' => 'comment'],
                ['title' => 'Announcements', 'value' => "TUTOR_LMS-announcements", 'itemType' => 'announcement'],
                ['title' => 'Resources', 'value' => "TUTOR_LMS-resources", 'itemType' => 'resources'],
                ['title' => 'Gradebooks', 'value' => "TUTOR_LMS-gradebooks", 'itemType' => 'post'],
                ['title' => 'Instructors', 'value' => "TUTOR_LMS-instructors", 'itemType' => 'user'],
                // ['title' => 'Cart', 		 'value' => "TUTOR_LMS-cart", 'itemType' => 'post'] //temporary commented.
            ],
        ];

        $curriculum_group = [
            'title'               => 'Curriculum',
            'value'               => 'TUTOR_LMS_CURRICULUM',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-materials",
            'group'               => [
                ['title' => 'Materials', 'value' => "TUTOR_LMS-materials", 'itemType' => 'material'],
            ],
        ];

        $cart_group = [
            'title'               => 'Course',
            'value'               => 'TUTOR_LMS_COURSES',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-cart",
            'group'               => [
                ['title' => 'Cart', 'value' => "TUTOR_LMS-cart", 'itemType' => 'post'],
            ],
        ];

        if ($collectionType === 'posts' && $type === 'courses') {
            $options[] = $courses_group;
        } else if ($collectionType === 'TUTOR_LMS_COURSES' && $type === 'TUTOR_LMS-topics') {
            $options[] = $curriculum_group;
        } else {
            // $options[] = $cart_group; //temporary commented.
        }
        return $options;
    }

    public function get_tutor_item_types($oldItemType, $collectionName)
    {
        switch ($collectionName) {
            case 'TUTOR_LMS-tutor_course_rating':
                return 'comment';
            case 'TUTOR_LMS-materials':
                return 'material';
            case 'TUTOR_LMS-tutor_q_and_a':
                return 'comment';
            case 'TUTOR_LMS-announcements':
                return 'announcement';
            case 'TUTOR_LMS-resources':
                return 'resources';
            default:
                return $oldItemType;
        }
    }

    public function modify_rating_comment_data($value)
    {
        $moderation                = tutor_utils()->get_option('enable_course_review_moderation', false, true, true);
        $value['comment_agent']    = 'TutorLMSPlugin';
        $value['comment_type']     = 'tutor_course_rating';
        $value['comment_approved'] = $moderation ? 'hold' : 'approved';
        return $value;
    }

    public function modify_qna_comment_data($value)
    {
        $value['comment_agent']    = 'TutorLMSPlugin';
        $value['comment_type']     = 'tutor_q_and_a';
        $value['comment_approved'] = 'approved';
        return $value;
    }

    public function rating_comment_added($value)
    {
        $comment_ID = $value['comment_ID'];
        $form_data  = $value['form_data'];
        $rating     = isset($form_data['rating']) ? sanitize_text_field($form_data['rating']) : 0;
        if (! $comment_ID) {
            return;
        }

        global $wpdb;
        $rating_info = $wpdb->get_row(
            $wpdb->prepare(
                "SELECT * FROM {$wpdb->commentmeta}
            WHERE comment_id = %d
                AND meta_key = 'tutor_rating'; ",
                $comment_ID
            )
        );
        if ($rating_info) {
            $wpdb->update(
                $wpdb->commentmeta,
                ['meta_value' => $rating],
                [
                    'comment_id' => $comment_ID,
                    'meta_key'   => 'tutor_rating',
                ]
            );
        } else {
            $wpdb->insert(
                $wpdb->commentmeta,
                [
                    'comment_id' => $comment_ID,
                    'meta_key'   => 'tutor_rating',
                    'meta_value' => $rating,
                ]
            );
        }
        do_action('tutor_after_rating_placed', $comment_ID);
    }

    public function qna_comment_added($value)
    {
        $form_data      = $value['form_data'];
        $comment_parent = isset($form_data['comment_parent']) ? sanitize_text_field($form_data['comment_parent']) : 0;
        if (! $comment_parent) {
            return;
        }

        global $wpdb;
        $parent_q_author_id = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT user_id
					FROM {$wpdb->comments}
					WHERE comment_ID = %d
				",
                $comment_parent
            )
        );

        $asker_id = $value['user_id'];
        $self     = $asker_id == $parent_q_author_id;
        update_comment_meta($parent_q_author_id, 'tutor_qna_read' . ($self ? '' : '_' . $asker_id), 0);
    }

    public function droip_post_types($post_types)
    {
        $post_types[] = [
            'title' => 'Course Topics',
            'value' => 'topics',
        ];
        return $post_types;
    }
    public function droip_collection_TUTOR_LMS_COURSES($value, $args)
    {
        $context = isset($args['context']) ? $args['context'] : false;
        if ($context && isset($context['collectionType'])) {
            $collectionType = $context['collectionType']; // post/tags/users
            if ($collectionType === 'post') {
                if ($args['name'] === 'TUTOR_LMS-topics') {
                    $args['post_parent'] = $context['id'];
                    $args['inherit']     = true;
                }
            }
        }
        if ($args['name'] === 'TUTOR_LMS-topics') {
            $args['name']          = 'topics';
            $args['item_per_page'] = -1;
            // $obj                   = HelperFunctions::get_posts($args);
            // $obj['itemType']       = 'post';
            // return $obj;
            return [
                'data'       => tutor_utils()->get_topics($args['post_parent'])->posts,
                'pagination' => null,
                'itemType'   => 'post',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-tutor_course_rating') {
            $reviews = tutor_utils()->get_course_reviews($args['post_parent'], 0, 100, false, ['approved'], get_current_user_id());
            $reviews = $this->add_author_image_to_data($reviews);
            return [
                'data'       => $reviews,
                'pagination' => [],
                'itemType'   => 'comment',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-materials') {
            $topic_contents    = tutor_utils()->get_course_contents_by_topic($args['post_parent'], -1);
            $obj['data']       = $topic_contents->posts;
            $obj['pagination'] = [];
            $obj['itemType']   = 'post';
            return $obj;
        } elseif ($args['name'] === 'TUTOR_LMS-tutor_q_and_a') {
            if ($args['post_parent'] == 0) {
                return [
                    'data'       => [],
                    'pagination' => [],
                    'itemType'   => 'comment',
                ];
            }

            if (isset($args['context']) && isset($args['context']['comment_ID'])) {
                $q_id            = $args['context']['comment_ID'];
                $answer          = tutor_utils()->get_qa_answer_by_question($q_id);
                $filteredAnswers = array_values(
                    array_filter(
                        $answer,
                        function ($obj) use ($q_id) {
                            return $obj->comment_ID !== $q_id;
                        }
                    )
                );
                $filteredAnswers = $this->add_author_image_to_data($filteredAnswers);
                $filteredAnswers = $this->add_qna_reply_flag($filteredAnswers);
                return [
                    'data'       => $filteredAnswers,
                    'pagination' => [],
                    'itemType'   => 'comment',
                ];
            }

            $questions = tutor_utils()->get_qa_questions(0, 100, '', null, null, null, null, false, ['course_id' => $args['post_parent']]);
            $questions = $this->add_author_image_to_data($questions);
            return [
                'data'       => $questions,
                'pagination' => [],
                'itemType'   => 'comment',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-announcements') {
            $announcements = tutor_utils()->get_announcements($args['post_parent']);
            return [
                'data'       => $announcements,
                'pagination' => [],
                'itemType'   => 'announcement',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-resources') {
            $resources = tutor_utils()->get_attachments($args['post_parent']);
            return [
                'data'       => $resources,
                'pagination' => [],
                'itemType'   => 'resources',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-instructors') {
            $instructors = tutor_utils()->get_instructors_by_course($args['post_parent']);
            $instructors = array_map(fn($user) => (array) array_merge((array) $user, [
                'user_url'      => get_author_posts_url($user->ID),
                'profile_image' => get_avatar_url($user->ID),
            ]), $instructors);

            return [
                'data'       => $instructors,
                'pagination' => [],
                'itemType'   => 'user',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-cart') {
            $cart       = new CartController();
            $cart_items = $cart->get_cart_items();
            $courses    = isset($cart_items['courses'], $cart_items['courses']['results']) ? $cart_items['courses']['results'] : [];
            return [
                'data'       => $courses,
                'pagination' => null,
                'itemType'   => 'post',
            ];
        } else {
            return [
                'data'       => [],
                'pagination' => [],
                'itemType'   => false,
            ];
        }

        return $value;
    }

    public function droip_collection_TUTOR_LMS_CURRICULUM($value, $args)
    {
        if ($args['name'] === 'TUTOR_LMS-materials' && isset($args['post_parent'])) {
            $topic_contents    = tutor_utils()->get_course_contents_by_topic($args['post_parent'], -1);
            $obj['data']       = $topic_contents->posts;
            $obj['pagination'] = [];
            $obj['itemType']   = 'post';
            return $obj;
        } else {
            return [
                'data'       => [],
                'pagination' => [],
                'itemType'   => false,
            ];
        }

        return $value;
    }

    public function droip_dynamic_content($value, $args)
    {
        if (isset($args['dynamicContent'])) {
            $dynamicContent = $args['dynamicContent'];
            $collectionItem = $args['collectionItem'];

            if ($collectionItem && isset($collectionItem['ID'])) {
                $course_id = $collectionItem['ID'];
            } elseif (isset($args['post_id'])) {
                $course_id = $args['post_id'];
            }

            if ($dynamicContent['type'] === 'course') {
                if ($dynamicContent['value'] === 'thumbnail_image') {
                    $tutor_course_img = get_tutor_course_thumbnail_src('post-thumbnail', $course_id);
                    if ($tutor_course_img) {
                        return $tutor_course_img;
                    }
                } elseif ($dynamicContent['value'] === 'thumbnail_video') {
                    $video_info = tutor_utils()->get_video_info($course_id);
                    $source_key = is_object($video_info) ? 'source_' . $video_info->source : null;
                    if ($source_key) {
                        return ['url' => $video_info->$source_key];
                    }
                }
            }
        } elseif (isset($args['settings'])) {
            $settings = $args['settings'];
            $options  = [];
            switch ($args['collectionProperties']['type']) {
                case 'TUTOR_LMS-tutor_course_rating':
                    $reviews            = tutor_utils()->get_course_reviews($args['collectionItem']['comment_ID'], 0, 100, false, ['approved'], get_current_user_id(), false);
                    $options['comment'] = count($reviews) > 0 ? $reviews[0] : [];
                    break;
                case 'TUTOR_LMS-materials':
                    $options['material'] = $args['collectionItem'];
                    break;
                case 'TUTOR_LMS-tutor_q_and_a':
                    $options['comment'] = tutor_utils()->get_qa_question($args['collectionItem']['comment_ID']);
                    break;
                case 'TUTOR_LMS-announcements':
                    $options['announcement'] = get_post($args['collectionItem']['ID']);
                    break;
                case 'TUTOR_LMS-resources':
                    $resource_id = $args['collectionItem']['id'] ?? null;
                    if ($resource_id) {
                        $resource = tutor_utils()->get_attachment_data($resource_id);
                        if ($resource) {
                            $options['resources'] = $resource;
                        }
                    }
                    break;
                case 'TUTOR_LMS-cart':
                    $cart            = new CartController();
                    $cart_items      = $cart->get_cart_items();
                    $course_id       = $args['collectionItem']['ID'];
                    $options['post'] = [];

                    if ($cart_items && isset($cart_items['courses']['results']) && is_array($cart_items['courses']['results'])) {
                        foreach ($cart_items['courses']['results'] as $course) {
                            if ($course->ID === $course_id) {
                                $options['post'] = $course;
                                break;
                            }
                        }
                    }
                default:
                    break;
            }

            $collectionItem = $args['collectionItem'];
            if ($collectionItem && isset($collectionItem['ID'])) {
                $course_id = $collectionItem['ID'];
            } elseif (isset($args['post_id'])) {
                $course_id = $args['post_id'];
            }

            $is_instructor = false;
            if (! $collectionItem && isset($args['templateEditContext']['collectionType'])) {
                $is_instructor = $args['templateEditContext']['collectionType'] === 'user';
            } else if (
                $collectionItem && $collectionItem['collectionType'] === 'users' ||
                $args['collectionProperties']['type'] === 'TUTOR_LMS-instructors'
            ) {
                $is_instructor = true;
            }

            if (isset($settings['course_meta_type'])) {
                $meta = $this->get_course_meta($settings['course_meta_type'], $course_id, $options, $settings, $is_instructor);
                return $this->wrap_if_meta_has_label($meta, $settings);
            }
            if (isset($settings['thumbnail_type'])) {
                return $this->get_course_thumbnail($settings['thumbnail_type'], $settings['thumbnail_type'], $course_id, $options);
            }
        }
        return $value;
    }

    public function add_author_image_to_data($list)
    {
        foreach ($list as $item) {
            $item->author_profile_picture = ['src' => get_avatar_url($item->user_id)];
        }
        return $list;
    }

    public function add_qna_reply_flag($list)
    {
        foreach ($list as $item) {
            $item->reply = true;
        }
        return $list;
    }
}
