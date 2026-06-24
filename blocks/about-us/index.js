import {
  registerBlockType,
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  Button,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heroEyebrow,
    heroHeading,
    heroBgRiderId,
    heroBgRiderUrl,
    heroBgTextureId,
    heroBgTextureUrl,
    heroDividerId,
    heroDividerUrl,
    aboutBgId,
    aboutBgUrl,
    aboutHeading,
    aboutParagraphs,
    photoRiderId,
    photoRiderUrl,
    photoRiderAlt,
    photoPortraitId,
    photoPortraitUrl,
    photoPortraitAlt,
    photoDesertId,
    photoDesertUrl,
    photoDesertAlt,
    contactBgId,
    contactBgUrl,
    contactHeading,
    contactDetails,
    contactMascotId,
    contactMascotUrl,
    contactTbtLogoId,
    contactTbtLogoUrl,
  } = attributes;

  const blockProps = useBlockProps({
    className: "mbn-about-us-editor",
  });

  return (
    <>
      <InspectorControls>
        {/* Hero Images */}
        <PanelBody
          title={__("Hero Background Images", "mbn-theme")}
          initialOpen={true}
        >
          <p>
            <strong>{__("Rider Background", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  heroBgRiderId: media.id,
                  heroBgRiderUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={heroBgRiderId}
              render={({ open }) => (
                <>
                  {heroBgRiderUrl && (
                    <img
                      src={heroBgRiderUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {heroBgRiderId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {heroBgRiderId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          heroBgRiderId: 0,
                          heroBgRiderUrl: "",
                        })
                      }
                    >
                      {__("Remove", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("Texture Overlay", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  heroBgTextureId: media.id,
                  heroBgTextureUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={heroBgTextureId}
              render={({ open }) => (
                <>
                  {heroBgTextureUrl && (
                    <img
                      src={heroBgTextureUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {heroBgTextureId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {heroBgTextureId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          heroBgTextureId: 0,
                          heroBgTextureUrl: "",
                        })
                      }
                    >
                      {__("Remove", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("Divider Line", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  heroDividerId: media.id,
                  heroDividerUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={heroDividerId}
              render={({ open }) => (
                <>
                  {heroDividerUrl && (
                    <img
                      src={heroDividerUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {heroDividerId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {heroDividerId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          heroDividerId: 0,
                          heroDividerUrl: "",
                        })
                      }
                    >
                      {__("Remove", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* About Section Background */}
        <PanelBody title={__("About Section Background", "mbn-theme")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  aboutBgId: media.id,
                  aboutBgUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={aboutBgId}
              render={({ open }) => (
                <>
                  {aboutBgUrl && (
                    <img
                      src={aboutBgUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {aboutBgId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {aboutBgId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          aboutBgId: 0,
                          aboutBgUrl: "",
                        })
                      }
                    >
                      {__("Remove", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* About Paragraphs */}
        <PanelBody title={__("About Story Paragraphs", "mbn-theme")}>
          {aboutParagraphs.map((paragraph, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
              }}
            >
              <TextareaControl
                label={__(`Paragraph ${index + 1}`, "mbn-theme")}
                value={paragraph.text}
                onChange={(value) => {
                  const updated = [...aboutParagraphs];
                  updated[index] = { ...updated[index], text: value };
                  setAttributes({ aboutParagraphs: updated });
                }}
                rows={4}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    aboutParagraphs: aboutParagraphs.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Paragraph", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                aboutParagraphs: [...aboutParagraphs, { text: "" }],
              })
            }
          >
            {__("Add Paragraph", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Photos */}
        <PanelBody title={__("About Photos", "mbn-theme")}>
          <p>
            <strong>{__("Rider Photo", "mbn-theme")}</strong>
          </p>
          <TextControl
            label={__("Alt Text", "mbn-theme")}
            value={photoRiderAlt}
            onChange={(value) => setAttributes({ photoRiderAlt: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  photoRiderId: media.id,
                  photoRiderUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={photoRiderId}
              render={({ open }) => (
                <>
                  {photoRiderUrl && (
                    <img
                      src={photoRiderUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {photoRiderId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("Portrait Photo", "mbn-theme")}</strong>
          </p>
          <TextControl
            label={__("Alt Text", "mbn-theme")}
            value={photoPortraitAlt}
            onChange={(value) => setAttributes({ photoPortraitAlt: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  photoPortraitId: media.id,
                  photoPortraitUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={photoPortraitId}
              render={({ open }) => (
                <>
                  {photoPortraitUrl && (
                    <img
                      src={photoPortraitUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {photoPortraitId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("Desert Photo", "mbn-theme")}</strong>
          </p>
          <TextControl
            label={__("Alt Text", "mbn-theme")}
            value={photoDesertAlt}
            onChange={(value) => setAttributes({ photoDesertAlt: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  photoDesertId: media.id,
                  photoDesertUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={photoDesertId}
              render={({ open }) => (
                <>
                  {photoDesertUrl && (
                    <img
                      src={photoDesertUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {photoDesertId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Contact Section */}
        <PanelBody title={__("Contact Section Background", "mbn-theme")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  contactBgId: media.id,
                  contactBgUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={contactBgId}
              render={({ open }) => (
                <>
                  {contactBgUrl && (
                    <img
                      src={contactBgUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {contactBgId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Contact Details */}
        <PanelBody title={__("Contact Details", "mbn-theme")}>
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
              }}
            >
              <TextControl
                label={__("Label", "mbn-theme")}
                value={detail.label}
                onChange={(value) => {
                  const updated = [...contactDetails];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ contactDetails: updated });
                }}
              />
              <TextControl
                label={__("Value", "mbn-theme")}
                value={detail.value}
                onChange={(value) => {
                  const updated = [...contactDetails];
                  updated[index] = { ...updated[index], value: value };
                  setAttributes({ contactDetails: updated });
                }}
              />
              <ToggleControl
                label={__("Is Link?", "mbn-theme")}
                checked={detail.isLink}
                onChange={(value) => {
                  const updated = [...contactDetails];
                  updated[index] = { ...updated[index], isLink: value };
                  setAttributes({ contactDetails: updated });
                }}
              />
              {detail.isLink && (
                <TextControl
                  label={__("Link URL", "mbn-theme")}
                  value={detail.linkUrl}
                  onChange={(value) => {
                    const updated = [...contactDetails];
                    updated[index] = { ...updated[index], linkUrl: value };
                    setAttributes({ contactDetails: updated });
                  }}
                />
              )}
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    contactDetails: contactDetails.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Detail", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                contactDetails: [
                  ...contactDetails,
                  { label: "", value: "", isLink: false, linkUrl: "" },
                ],
              })
            }
          >
            {__("Add Detail", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Contact Images */}
        <PanelBody title={__("Contact Decorative Images", "mbn-theme")}>
          <p>
            <strong>{__("Mascot (Left)", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  contactMascotId: media.id,
                  contactMascotUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={contactMascotId}
              render={({ open }) => (
                <>
                  {contactMascotUrl && (
                    <img
                      src={contactMascotUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {contactMascotId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("TBT Logo (Right)", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  contactTbtLogoId: media.id,
                  contactTbtLogoUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={contactTbtLogoId}
              render={({ open }) => (
                <>
                  {contactTbtLogoUrl && (
                    <img
                      src={contactTbtLogoUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {contactTbtLogoId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>

      {/* Simplified Editor Preview */}
      <div {...blockProps}>
        <div style={{ padding: "20px", border: "2px solid #ddd" }}>
          {/* Hero Section Preview */}
          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#000",
              color: "#fff",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {__("🏍️ Hero Section", "mbn-theme")}
            </p>
            <RichText
              tagName="p"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              value={heroEyebrow}
              onChange={(value) => setAttributes({ heroEyebrow: value })}
              placeholder={__("Hero eyebrow…", "mbn-theme")}
            />
            <RichText
              tagName="h1"
              style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}
              value={heroHeading}
              onChange={(value) => setAttributes({ heroHeading: value })}
              placeholder={__("Hero heading…", "mbn-theme")}
            />
          </div>

          {/* About Section Preview */}
          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#f5f5f5",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {__("📖 About Content", "mbn-theme")}
            </p>
            <RichText
              tagName="h2"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
              value={aboutHeading}
              onChange={(value) => setAttributes({ aboutHeading: value })}
              placeholder={__("About heading…", "mbn-theme")}
            />
            <p style={{ fontSize: "13px", color: "#666" }}>
              {aboutParagraphs.length} {__("paragraph(s)", "mbn-theme")}
            </p>
            <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
              {__("3 photos configured", "mbn-theme")}
            </p>
          </div>

          {/* Contact Section Preview */}
          <div
            style={{ padding: "20px", background: "#191919", color: "#fff" }}
          >
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {__("📞 Contact CTA", "mbn-theme")}
            </p>
            <RichText
              tagName="h2"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
              value={contactHeading}
              onChange={(value) => setAttributes({ contactHeading: value })}
              placeholder={__("Contact heading…", "mbn-theme")}
            />
            <p style={{ fontSize: "13px", color: "#ccc" }}>
              {contactDetails.length} {__("contact detail(s)", "mbn-theme")}
            </p>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "12px",
              color: "#666",
              textAlign: "center",
            }}
          >
            {__(
              "👈 Use the sidebar to edit all content, images, and settings",
              "mbn-theme",
            )}
          </p>
        </div>
      </div>
    </>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null,
});
