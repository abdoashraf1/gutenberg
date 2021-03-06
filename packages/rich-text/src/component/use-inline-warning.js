/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

export function useInlineWarning( { ref } ) {
	useEffect( () => {
		if ( process.env.NODE_ENV === 'development' ) {
			const target = ref.current;
			const { defaultView } = target.ownerDocument;
			const computedStyle = defaultView.getComputedStyle( target );

			if ( computedStyle.display === 'inline' ) {
				// eslint-disable-next-line no-console
				console.warn(
					'RichText cannot be used with an inline container. Please use a different tagName.'
				);
			}
		}
	}, [] );
}
