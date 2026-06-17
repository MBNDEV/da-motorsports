import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  MediaUpload,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  Button,
  TextControl,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
  const {
    heading,
    subheading,
    buttonText,
    buttonUrl,
    imageUrl,
    imageAlt,
  } = attributes;

  const blockProps = useBlockProps( {
    className: `above-the-fold ${ className || '' }`.trim(),
  } );

  const onSelectImage = ( media ) => {
    setAttributes( {
      imageUrl: media.url,
      imageAlt: media.alt,
      imageId: media.id,
    } );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Button Settings', 'mbn-theme' ) } initialOpen>
          <TextControl
            label={ __( 'Button URL', 'mbn-theme' ) }
            value={ buttonUrl }
            onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
            placeholder="https://"
          />
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div className="above-the-fold__content">
          <RichText
            tagName="h2"
            className="above-the-fold__heading"
            value={ heading }
            onChange={ ( value ) => setAttributes( { heading: value } ) }
            placeholder={ __( 'Add a headline…', 'mbn-theme' ) }
          />
          <RichText
            tagName="p"
            className="above-the-fold__subheading"
            value={ subheading }
            onChange={ ( value ) => setAttributes( { subheading: value } ) }
            placeholder={ __( 'Add supporting text…', 'mbn-theme' ) }
          />
          <div className="above-the-fold__actions">
            <RichText
              tagName="span"
              className="above-the-fold__button-text"
              value={ buttonText }
              onChange={ ( value ) => setAttributes( { buttonText: value } ) }
              placeholder={ __( 'Button label…', 'mbn-theme' ) }
            />
            { buttonUrl ? (
              <a
                className="above-the-fold__button"
                href={ buttonUrl }
              >
                { buttonText || __( 'Learn more', 'mbn-theme' ) }
              </a>
            ) : null }
          </div>
        </div>

        <div className="above-the-fold__image">
          { imageUrl ? (
            <img src={ imageUrl } alt={ imageAlt || '' } />
          ) : (
            <MediaUpload
              onSelect={ onSelectImage }
              allowedTypes={ [ 'image' ] }
              value={ attributes.imageId }
              render={ ( { open } ) => (
                <Button isPrimary onClick={ open }>
                  { __( 'Select image', 'mbn-theme' ) }
                </Button>
              ) }
            />
          ) }
        </div>
      </div>
    </>
  );
}
