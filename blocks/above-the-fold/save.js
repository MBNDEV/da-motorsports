import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const {
    heading,
    subheading,
    buttonText,
    buttonUrl,
    imageUrl,
    imageAlt,
  } = attributes;

  const blockProps = useBlockProps.save( {
    className: 'above-the-fold',
  } );

  return (
    <section { ...blockProps }>
      <div className="above-the-fold__inner">
        <div className="above-the-fold__content">
          <RichText.Content
            tagName="h2"
            className="above-the-fold__heading"
            value={ heading }
          />
          <RichText.Content
            tagName="p"
            className="above-the-fold__subheading"
            value={ subheading }
          />
          <div className="above-the-fold__actions">
            <RichText.Content
              tagName="span"
              className="above-the-fold__button-text"
              value={ buttonText }
            />
            { buttonUrl ? (
              <a
                className="above-the-fold__button"
                href={ buttonUrl }
              >
                { buttonText || 'Learn more' }
              </a>
            ) : null }
          </div>
        </div>
        { imageUrl ? (
          <div className="above-the-fold__image">
            <img src={ imageUrl } alt={ imageAlt || '' } />
          </div>
        ) : null }
      </div>
    </section>
  );
}
