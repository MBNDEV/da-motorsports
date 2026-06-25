import {
  registerBlockType,
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  PanelBody,
  TextControl,
  Button,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heading,
    message,
    buttonText,
    buttonUrl,
    backgroundImageId,
    backgroundImageUrl,
  } = attributes;

  const blockProps = useBlockProps({
    className: "homepage__hero",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Background Image", "mbn-theme")}
          initialOpen={true}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  backgroundImageId: media.id,
                  backgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={backgroundImageId}
              render={({ open }) => (
                <>
                  {backgroundImageUrl && (
                    <img
                      src={backgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button onClick={open} variant="secondary">
                    {backgroundImageUrl
                      ? __("Change Image", "mbn-theme")
                      : __("Select Image", "mbn-theme")}
                  </Button>
                  {backgroundImageUrl && (
                    <Button
                      onClick={() =>
                        setAttributes({
                          backgroundImageId: 0,
                          backgroundImageUrl: "",
                        })
                      }
                      variant="link"
                      isDestructive
                      style={{ marginLeft: "10px" }}
                    >
                      {__("Remove", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__("Content", "mbn-theme")}>
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
          <TextControl
            label={__("Message", "mbn-theme")}
            value={message}
            onChange={(value) => setAttributes({ message: value })}
            help={__("The thank you message text.", "mbn-theme")}
          />
        </PanelBody>

        <PanelBody title={__("Button", "mbn-theme")}>
          <TextControl
            label={__("Button Text", "mbn-theme")}
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <TextControl
            label={__("Button URL", "mbn-theme")}
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
            placeholder="/"
          />
        </PanelBody>
      </InspectorControls>

      <section {...blockProps} aria-label="Thank You">
        <div
          className="homepage__hero-bg"
          aria-hidden="true"
          style={{
            backgroundImage: backgroundImageUrl
              ? `url(${backgroundImageUrl})`
              : "none",
            backgroundColor: backgroundImageUrl ? "transparent" : "#f0f0f0",
          }}
        >
          {backgroundImageUrl && (
            <img src={backgroundImageUrl} alt="" style={{ display: "none" }} />
          )}
        </div>
        <div className="homepage__hero-content">
          <RichText
            tagName="h1"
            className="homepage__hero-heading"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Thank You", "mbn-theme")}
          />
          <div className="homepage__hero-footer">
            <RichText
              tagName="p"
              className="homepage__hero-text"
              value={message}
              onChange={(value) => setAttributes({ message: value })}
              placeholder={__("Enter your thank you message...", "mbn-theme")}
            />
            <a href={buttonUrl} className="homepage__button">
              {buttonText}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
});
