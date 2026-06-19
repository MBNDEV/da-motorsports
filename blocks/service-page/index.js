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
  ToggleControl,
  SelectControl,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heroHeading,
    heroBody,
    heroButtonText,
    heroButtonUrl,
    heroBackgroundType,
    heroBackgroundVideoId,
    heroBackgroundVideoUrl,
    heroBackgroundImageId,
    heroBackgroundImageUrl,
    whyChooseHeading,
    whyChooseSubheading,
    whyChooseItems,
    whyChooseBackgroundImageId,
    whyChooseBackgroundImageUrl,
    servicesBackgroundType,
    servicesBackgroundVideoId,
    servicesBackgroundVideoUrl,
    servicesBackgroundImageId,
    servicesBackgroundImageUrl,
    servicesHeaderImageId,
    servicesHeaderImageUrl,
    servicesHeading,
    servicesSubheading,
    serviceItems,
    cta1Heading,
    cta1Subheading,
    cta1Button1Text,
    cta1Button1Url,
    cta1Button2Text,
    cta1Button2Url,
    cta1BackgroundImageId,
    cta1BackgroundImageUrl,
    testimonialHeading,
    testimonialSubheading,
    testimonials,
    testimonialBackgroundImageId,
    testimonialBackgroundImageUrl,
    contactTagline,
    contactHeading,
    locations,
    faqBackgroundImageId,
    faqBackgroundImageUrl,
    faqHeading,
    faqSubheading,
    faqItems,
  } = attributes;

  const blockProps = useBlockProps({
    className: "mbn-homepage",
  });

  return (
    <>
      <InspectorControls>
        {/* Hero Section */}
        <PanelBody title={__("Hero Section", "mbn-theme")} initialOpen={true}>
          <TextControl
            label={__("Button URL", "mbn-theme")}
            value={heroButtonUrl}
            onChange={(value) => setAttributes({ heroButtonUrl: value })}
          />

          <SelectControl
            label={__("Background Type", "mbn-theme")}
            value={heroBackgroundType}
            options={[
              { label: __("Image", "mbn-theme"), value: "image" },
              { label: __("Video", "mbn-theme"), value: "video" },
            ]}
            onChange={(value) => setAttributes({ heroBackgroundType: value })}
          />

          {heroBackgroundType === "video" && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    heroBackgroundVideoId: media.id,
                    heroBackgroundVideoUrl: media.url,
                  })
                }
                allowedTypes={["video"]}
                value={heroBackgroundVideoId}
                render={({ open }) => (
                  <>
                    {heroBackgroundVideoUrl && (
                      <video
                        src={heroBackgroundVideoUrl}
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                        controls
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {heroBackgroundVideoId
                        ? __("Replace Video", "mbn-theme")
                        : __("Upload Video", "mbn-theme")}
                    </Button>
                  </>
                )}
              />
            </MediaUploadCheck>
          )}

          {heroBackgroundType === "image" && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    heroBackgroundImageId: media.id,
                    heroBackgroundImageUrl: media.url,
                  })
                }
                allowedTypes={["image"]}
                value={heroBackgroundImageId}
                render={({ open }) => (
                  <>
                    {heroBackgroundImageUrl && (
                      <img
                        src={heroBackgroundImageUrl}
                        alt=""
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {heroBackgroundImageId
                        ? __("Replace Image", "mbn-theme")
                        : __("Upload Image", "mbn-theme")}
                    </Button>
                  </>
                )}
              />
            </MediaUploadCheck>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "20px",
            background: "#f5f5f5",
            border: "2px dashed #ccc",
          }}
        >
          <h3
            style={{
              margin: "0 0 20px",
              fontFamily: "Oxanium, sans-serif",
              fontSize: "24px",
            }}
          >
            {__("🏍️ Homepage Block Editor", "mbn-theme")}
          </h3>

          {/* Hero Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#000",
              color: "#fff",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              Hero Section
            </p>
            <RichText
              tagName="h1"
              value={heroHeading}
              onChange={(value) => setAttributes({ heroHeading: value })}
              placeholder={__("Hero Heading...", "mbn-theme")}
              style={{
                fontSize: "32px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={heroBody}
              onChange={(value) => setAttributes({ heroBody: value })}
              placeholder={__("Hero body text...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px", opacity: "0.9" }}
            />
            <RichText
              tagName="span"
              value={heroButtonText}
              onChange={(value) => setAttributes({ heroButtonText: value })}
              placeholder={__("Button Text...", "mbn-theme")}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Why Choose Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              Why Choose Section
            </p>
            <RichText
              tagName="h2"
              value={whyChooseHeading}
              onChange={(value) => setAttributes({ whyChooseHeading: value })}
              placeholder={__("Section Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={whyChooseSubheading}
              onChange={(value) =>
                setAttributes({ whyChooseSubheading: value })
              }
              placeholder={__("Subheading...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px" }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
              {whyChooseItems.length} feature items configured
            </p>
          </div>

          {/* Services Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#191919",
              color: "#fff",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              Services Section
            </p>
            <RichText
              tagName="h2"
              value={servicesHeading}
              onChange={(value) => setAttributes({ servicesHeading: value })}
              placeholder={__("Services Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={servicesSubheading}
              onChange={(value) => setAttributes({ servicesSubheading: value })}
              placeholder={__("Services description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px", opacity: "0.9" }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", opacity: "0.7" }}>
              {serviceItems.length} service items configured
            </p>
          </div>

          {/* CTA Section 1 */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#333",
              color: "#fff",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              CTA Section 1
            </p>
            <RichText
              tagName="h2"
              value={cta1Heading}
              onChange={(value) => setAttributes({ cta1Heading: value })}
              placeholder={__("CTA Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={cta1Subheading}
              onChange={(value) => setAttributes({ cta1Subheading: value })}
              placeholder={__("CTA description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px", opacity: "0.9" }}
            />
            <RichText
              tagName="span"
              value={cta1Button1Text}
              onChange={(value) => setAttributes({ cta1Button1Text: value })}
              placeholder={__("Button 1...", "mbn-theme")}
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#000",
                marginRight: "10px",
                fontSize: "14px",
              }}
            />
            <RichText
              tagName="span"
              value={cta1Button2Text}
              onChange={(value) => setAttributes({ cta1Button2Text: value })}
              placeholder={__("Button 2...", "mbn-theme")}
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#5b0402",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Testimonial Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              Testimonials
            </p>
            <RichText
              tagName="h2"
              value={testimonialHeading}
              onChange={(value) => setAttributes({ testimonialHeading: value })}
              placeholder={__("Testimonials Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={testimonialSubheading}
              onChange={(value) =>
                setAttributes({ testimonialSubheading: value })
              }
              placeholder={__("Testimonials description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px" }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
              {testimonials.length} testimonial(s) configured
            </p>
          </div>

          {/* Contact Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#000",
              color: "#fff",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              Contact / Locations
            </p>
            <RichText
              tagName="h2"
              value={contactHeading}
              onChange={(value) => setAttributes({ contactHeading: value })}
              placeholder={__("Contact Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", opacity: "0.7" }}>
              {locations.length} location(s) configured
            </p>
          </div>

          {/* FAQ Section */}
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "12px",
                opacity: "0.7",
                textTransform: "uppercase",
              }}
            >
              FAQ
            </p>
            <RichText
              tagName="h2"
              value={faqHeading}
              onChange={(value) => setAttributes({ faqHeading: value })}
              placeholder={__("FAQ Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={faqSubheading}
              onChange={(value) => setAttributes({ faqSubheading: value })}
              placeholder={__("FAQ description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px" }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
              {faqItems.length} FAQ item(s) configured
            </p>
          </div>

          <p
            style={{
              margin: "0",
              fontSize: "13px",
              color: "#666",
              textAlign: "center",
            }}
          >
            {__(
              "✏️ Use the sidebar (Inspector Controls) to edit all content, images, and links",
              "mbn-theme",
            )}
          </p>
        </div>
      </div>
    </>
  );
}

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: () => null,
});
