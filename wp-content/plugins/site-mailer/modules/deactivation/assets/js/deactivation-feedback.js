import '../css/style.css';

document.addEventListener( 'DOMContentLoaded', function() {
	function showSiteMailerModal( title, url, customClass ) {
		if ( window.tb_show ) {
			window.tb_show( title, url );
		}
		setTimeout( function() {
			if ( customClass ) {
				const tbWindow = document.getElementById( 'TB_window' );
				if ( tbWindow ) {
					tbWindow.classList.add( customClass );
				}
			}
		}, 5 );
	}

	function hideAllTextFields() {
		const textFields = document.querySelectorAll( '.site-mailer-feedback-text-field' );
		textFields.forEach( function( field ) {
			field.style.display = 'none';
		} );
	}

	function showTextField( fieldId ) {
		const field = document.getElementById( fieldId );
		if ( field ) {
			field.style.display = 'block';
		}
	}

	function sendAjaxRequest( data, callback ) {
		const formData = new URLSearchParams( data );

		fetch( window?.siteMailerDeactivationFeedback?.ajaxurl || '', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		} )
			.then( () => {
				if ( callback ) {
					callback();
				}
			} )
			.catch( ( error ) => {
				console.warn( 'Feedback submission failed:', error );
				if ( callback ) {
					callback();
				}
			} );
	}

	const deactivateLink = document.getElementById( 'deactivate-site-mailer' );

	if ( deactivateLink ) {
		const originalHref = deactivateLink.getAttribute( 'href' );

		deactivateLink.addEventListener( 'click', function( e ) {
			e.preventDefault();

			showSiteMailerModal( 'QUICK FEEDBACK', '#TB_inline?width=550&height=auto&inlineId=site-mailer-deactivation-modal', 'site-mailer-feedback-thickbox' );

			return false;
		} );

		document.addEventListener( 'change', function( e ) {
			if ( e.target && e.target.name === 'site_mailer_deactivation_reason' ) {
				hideAllTextFields();

				const selectedValue = e.target.value;
				if ( selectedValue === 'unclear_how_to_use' ) {
					showTextField( 'text_field_unclear' );
				} else if ( selectedValue === 'switched_solution' ) {
					showTextField( 'text_field_switched' );
				} else if ( selectedValue === 'other' ) {
					showTextField( 'text_field_other' );
				}
			}
		} );

		document.addEventListener( 'click', function( e ) {
			if ( e.target && e.target.id === 'site-mailer-submit-deactivate' ) {
				e.preventDefault();

				const selectedReasonElement = document.querySelector( 'input[name="site_mailer_deactivation_reason"]:checked' );
				const selectedReason = selectedReasonElement ? selectedReasonElement.value : '';

				let additionalData = '';
				if ( selectedReason === 'unclear_how_to_use' ) {
					const unclearDetails = document.getElementById( 'unclear_details' );
					additionalData = unclearDetails ? unclearDetails.value : '';
				} else if ( selectedReason === 'switched_solution' ) {
					const switchedDetails = document.getElementById( 'switched_details' );
					additionalData = switchedDetails ? switchedDetails.value : '';
				} else if ( selectedReason === 'other' ) {
					const otherDetails = document.getElementById( 'other_details' );
					additionalData = otherDetails ? otherDetails.value : '';
				}

				if ( selectedReason ) {
					const requestData = {
						action: 'site_mailer_deactivation_feedback',
						reason: selectedReason,
						additional_data: additionalData,
						nonce: window?.siteMailerDeactivationFeedback?.nonce || '',
					};

					sendAjaxRequest( requestData, function() {
						if ( window.tb_remove ) {
							window.tb_remove();
						}
						window.location.href = originalHref;
					} );
				} else {
					if ( window.tb_remove ) {
						window.tb_remove();
					}
					window.location.href = originalHref;
				}
			}
		} );

		document.addEventListener( 'click', function( e ) {
			if ( e.target && e.target.id === 'site-mailer-skip-deactivate' ) {
				e.preventDefault();
				if ( window.tb_remove ) {
					window.tb_remove();
				}
				window.location.href = originalHref;
			}
		} );
	}
} );
