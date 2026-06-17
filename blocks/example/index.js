import {
	registerBlockType,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	PanelBody,
	TextareaControl,
	TextControl,
	Button,
	RangeControl,
	__,
} from '@mbn/editor';
import metadata from './block.json';

function Edit( { attributes, setAttributes } ) {
	const {
		eyebrow,
		heading,
		body,
		backgroundImageId,
		backgroundImageUrl,
		backgroundImageAlt,
		minHeight,
		overlayOpacity,
		contentMaxWidth,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'mbn-hero',
		style: {
			'--mbn-hero-min-height': `${ minHeight }px`,
			'--mbn-hero-overlay-opacity': overlayOpacity,
			'--mbn-hero-content-width': `${ contentMaxWidth }px`,
		},
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Background Image', 'mbn-theme' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Background Image Alt Text', 'mbn-theme' ) }
						value={ backgroundImageAlt }
						onChange={ ( value ) => setAttributes( { backgroundImageAlt: value } ) }
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( {
									backgroundImageId: media.id,
									backgroundImageUrl: media.url,
									backgroundImageAlt: media.alt || backgroundImageAlt,
								} )
							}
							allowedTypes={ [ 'image' ] }
							value={ backgroundImageId }
							render={ ( { open } ) => (
								<>
									{ backgroundImageUrl && (
										<img
											src={ backgroundImageUrl }
											alt=""
											className="mbn-hero__media-preview"
										/>
									) }
									<Button variant="secondary" onClick={ open }>
										{ backgroundImageId
											? __( 'Replace Image', 'mbn-theme' )
											: __( 'Upload Image', 'mbn-theme' ) }
									</Button>
									{ backgroundImageId > 0 && (
										<Button
											variant="link"
											isDestructive
											onClick={ () =>
												setAttributes( {
													backgroundImageId: 0,
													backgroundImageUrl: '',
													backgroundImageAlt: '',
												} )
											}
										>
											{ __( 'Remove', 'mbn-theme' ) }
										</Button>
									) }
								</>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'mbn-theme' ) }>
					<TextareaControl
						label={ __( 'Body Copy', 'mbn-theme' ) }
						value={ body }
						onChange={ ( value ) => setAttributes( { body: value } ) }
						rows={ 3 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Appearance', 'mbn-theme' ) }>
					<RangeControl
						label={ __( 'Minimum Height', 'mbn-theme' ) }
						value={ minHeight }
						onChange={ ( value ) => setAttributes( { minHeight: value } ) }
						min={ 420 }
						max={ 900 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Overlay Opacity', 'mbn-theme' ) }
						value={ overlayOpacity }
						onChange={ ( value ) => setAttributes( { overlayOpacity: value } ) }
						min={ 0.3 }
						max={ 1 }
						step={ 0.05 }
					/>
					<RangeControl
						label={ __( 'Content Width', 'mbn-theme' ) }
						value={ contentMaxWidth }
						onChange={ ( value ) => setAttributes( { contentMaxWidth: value } ) }
						min={ 420 }
						max={ 760 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>

			<section { ...blockProps }>
				{ backgroundImageUrl && (
					<div className="mbn-hero__media" aria-hidden="true">
						<img className="mbn-hero__media-image" src={ backgroundImageUrl } alt="" />
					</div>
				) }
				<div className="mbn-hero__overlay" aria-hidden="true"></div>
				<div className="mbn-hero__glow" aria-hidden="true"></div>
				<div className="mbn-hero__inner">
					<div className="mbn-hero__content">
						<RichText
							tagName="p"
							className="mbn-hero__eyebrow"
							value={ eyebrow }
							onChange={ ( value ) => setAttributes( { eyebrow: value } ) }
							placeholder={ __( 'Enter eyebrow…', 'mbn-theme' ) }
						/>
						<RichText
							tagName="h1"
							className="mbn-hero__heading"
							value={ heading }
							onChange={ ( value ) => setAttributes( { heading: value } ) }
							placeholder={ __( 'Enter heading…', 'mbn-theme' ) }
						/>
						<RichText
							tagName="p"
							className="mbn-hero__body"
							value={ body }
							onChange={ ( value ) => setAttributes( { body: value } ) }
							placeholder={ __( 'Enter body copy…', 'mbn-theme' ) }
						/>
					</div>
				</div>
			</section>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );