import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  MediaUpload,
} from '@wordpress/block-editor';
import {
  Button,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
  const { title, text, imageUrl, imageAlt } = attributes;

  const blockProps = useBlockProps( {
    className: `blurb ${ className || '' }`.trim(),
  } );

  const onSelectImage = ( media ) => {
    setAttributes( {
      imageUrl: media.url,
      imageAlt: media.alt,
      imageId: media.id,
    } );
  };

  return (
    <div { ...blockProps }>
      <div className="blurb__image">
        { imageUrl ? (
          <img src={ imageUrl } alt={ imageAlt || '' } />
        ) : (
          <MediaUpload
            onSelect={ onSelectImage }
            allowedTypes={ [ 'image' ] }
            value={ attributes.imageId }
            render={ ( { open } ) => (
              <Button isSecondary onClick={ open }>
                { __( 'Select image', 'mbn-theme' ) }
              </Button>
            ) }
          />
        ) }
      </div>
      <div className="blurb__content-wrap">
        <RichText
          tagName="h3"
          className="blurb__heading"
          value={ title }
          onChange={ ( value ) => setAttributes( { title: value } ) }
          placeholder={ __( 'Blurb title…', 'mbn-theme' ) }
        />
        <RichText
          tagName="p"
          className="blurb__content"
          value={ text }
          onChange={ ( value ) => setAttributes( { text: value } ) }
          placeholder={ __( 'Blurb text…', 'mbn-theme' ) }
        />
      </div>
    </div>
  );
}
