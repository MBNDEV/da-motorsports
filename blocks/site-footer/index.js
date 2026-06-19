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
  Button,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    logoImageId,
    logoImageUrl,
    newsletterText,
    gravityFormShortcode,
    disclaimerText,
    servicesLinks,
    companyLinks,
    socialLinks,
    copyrightText,
    legalLinks,
  } = attributes;

  const blockProps = useBlockProps({
    className: "homepage__footer",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Logo", "mbn-theme")} initialOpen={true}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  logoImageId: media.id,
                  logoImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={logoImageId}
              render={({ open }) => (
                <>
                  {logoImageUrl && (
                    <img
                      src={logoImageUrl}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginBottom: "10px",
                      }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {logoImageId
                      ? __("Replace Logo", "mbn-theme")
                      : __("Upload Logo", "mbn-theme")}
                  </Button>
                  {logoImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          logoImageId: 0,
                          logoImageUrl: "",
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

        <PanelBody title={__("Newsletter Section", "mbn-theme")}>
          <TextareaControl
            label={__("Newsletter Text", "mbn-theme")}
            value={newsletterText}
            onChange={(value) => setAttributes({ newsletterText: value })}
            rows={3}
          />
          <TextControl
            label={__("Gravity Form Shortcode", "mbn-theme")}
            value={gravityFormShortcode}
            onChange={(value) => setAttributes({ gravityFormShortcode: value })}
            help={__('Example: [gravityform id="1" title="true"]', "mbn-theme")}
          />
          <TextareaControl
            label={__("Disclaimer Text", "mbn-theme")}
            value={disclaimerText}
            onChange={(value) => setAttributes({ disclaimerText: value })}
            rows={2}
          />
        </PanelBody>

        <PanelBody title={__("Services Links", "mbn-theme")}>
          {servicesLinks.map((link, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Label", "mbn-theme")}
                value={link.label}
                onChange={(value) => {
                  const updated = [...servicesLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ servicesLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...servicesLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ servicesLinks: updated });
                }}
              />
              <Button
                isDestructive
                isSmall
                onClick={() => {
                  setAttributes({
                    servicesLinks: servicesLinks.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={() =>
              setAttributes({
                servicesLinks: [...servicesLinks, { label: "", url: "#" }],
              })
            }
          >
            {__("+ Add Service Link", "mbn-theme")}
          </Button>
        </PanelBody>

        <PanelBody title={__("Company Links", "mbn-theme")}>
          {companyLinks.map((link, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Label", "mbn-theme")}
                value={link.label}
                onChange={(value) => {
                  const updated = [...companyLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ companyLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...companyLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ companyLinks: updated });
                }}
              />
              <Button
                isDestructive
                isSmall
                onClick={() => {
                  setAttributes({
                    companyLinks: companyLinks.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={() =>
              setAttributes({
                companyLinks: [...companyLinks, { label: "", url: "#" }],
              })
            }
          >
            {__("+ Add Company Link", "mbn-theme")}
          </Button>
        </PanelBody>

        <PanelBody title={__("Social Links", "mbn-theme")}>
          {socialLinks.map((link, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Label", "mbn-theme")}
                value={link.label}
                onChange={(value) => {
                  const updated = [...socialLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ socialLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...socialLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ socialLinks: updated });
                }}
              />
              <TextControl
                label={__("Icon (filename without extension)", "mbn-theme")}
                value={link.icon}
                onChange={(value) => {
                  const updated = [...socialLinks];
                  updated[index] = { ...updated[index], icon: value };
                  setAttributes({ socialLinks: updated });
                }}
                help={__(
                  "Examples: facebook, instagram, x, linkedin, youtube",
                  "mbn-theme",
                )}
              />
              <Button
                isDestructive
                isSmall
                onClick={() => {
                  setAttributes({
                    socialLinks: socialLinks.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={() =>
              setAttributes({
                socialLinks: [
                  ...socialLinks,
                  { label: "", url: "#", icon: "facebook" },
                ],
              })
            }
          >
            {__("+ Add Social Link", "mbn-theme")}
          </Button>
        </PanelBody>

        <PanelBody title={__("Copyright & Legal", "mbn-theme")}>
          <TextControl
            label={__("Copyright Text", "mbn-theme")}
            value={copyrightText}
            onChange={(value) => setAttributes({ copyrightText: value })}
          />
          <hr />
          <h4>{__("Legal Links", "mbn-theme")}</h4>
          {legalLinks.map((link, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Label", "mbn-theme")}
                value={link.label}
                onChange={(value) => {
                  const updated = [...legalLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ legalLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...legalLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ legalLinks: updated });
                }}
              />
              <Button
                isDestructive
                isSmall
                onClick={() => {
                  setAttributes({
                    legalLinks: legalLinks.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={() =>
              setAttributes({
                legalLinks: [...legalLinks, { label: "", url: "#" }],
              })
            }
          >
            {__("+ Add Legal Link", "mbn-theme")}
          </Button>
        </PanelBody>
      </InspectorControls>

      <footer {...blockProps}>
        <div className="homepage__container">
          <div className="homepage__footer-top">
            <div className="homepage__footer-brand">
              {logoImageUrl && (
                <img
                  src={logoImageUrl}
                  alt="DA Motorsports"
                  className="homepage__footer-logo"
                />
              )}
              <RichText
                tagName="p"
                className="homepage__footer-text"
                value={newsletterText}
                onChange={(value) => setAttributes({ newsletterText: value })}
                placeholder={__("Newsletter text...", "mbn-theme")}
              />
              <div className="homepage__footer-form">
                <p
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    fontStyle: "italic",
                  }}
                >
                  {__(
                    "Gravity Form will appear here (edit shortcode in sidebar)",
                    "mbn-theme",
                  )}
                </p>
              </div>
              <RichText
                tagName="p"
                className="homepage__footer-disclaimer"
                value={disclaimerText}
                onChange={(value) => setAttributes({ disclaimerText: value })}
                placeholder={__("Disclaimer text...", "mbn-theme")}
              />
            </div>
            <nav className="homepage__footer-links">
              <div>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  {__(
                    "Footer links are editable in the sidebar →",
                    "mbn-theme",
                  )}
                </p>
              </div>
            </nav>
          </div>
          <div className="homepage__footer-bottom">
            <div className="homepage__footer-credits">
              <RichText
                tagName="p"
                value={copyrightText}
                onChange={(value) => setAttributes({ copyrightText: value })}
                placeholder={__("Copyright text...", "mbn-theme")}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null,
});
