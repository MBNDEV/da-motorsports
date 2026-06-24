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
    servicesGridEyebrow,
    processEyebrow,
    whyChooseItems,
    whyChooseBackgroundImageId,
    whyChooseBackgroundImageUrl,
    servicesBackgroundImageId,
    servicesBackgroundImageUrl,
    servicesHeaderImageId,
    servicesHeaderImageUrl,
    servicesHeading,
    servicesSubheading,
    serviceItems,
    services2BackgroundType,
    services2BackgroundVideoId,
    services2BackgroundVideoUrl,
    services2BackgroundImageId,
    services2BackgroundImageUrl,
    services2HeaderImageId,
    services2HeaderImageUrl,
    services2Heading,
    services2Subheading,
    service2Items,
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
    testimonialBackgroundImageId,
    testimonialBackgroundImageUrl,
    contactTagline,
    contactHeading,
    faqBackgroundImageId,
    faqBackgroundImageUrl,
    faqHeading,
    faqSubheading,
    faqItems,
    ctaFinalLabel,
    ctaFinalHeading,
    ctaFinalText,
    ctaFinalButton1Text,
    ctaFinalButton1Url,
    ctaFinalButton2Text,
    ctaFinalButton2Url,
    ctaFinalBackgroundImageId,
    ctaFinalBackgroundImageUrl,
    ctaFinalTextureImageId,
    ctaFinalTextureImageUrl,
    fiveSignsHeadingAccent,
    fiveSignsHeading,
    fiveSignsBodyText,
    fiveSignsChecklistItems,
    fiveSignsPhotoId,
    fiveSignsPhotoUrl,
    fiveSignsPhotoAlt,
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
            label={__("Heading", "mbn-theme")}
            value={heroHeading}
            onChange={(value) => setAttributes({ heroHeading: value })}
          />
          <TextareaControl
            label={__("Body Text", "mbn-theme")}
            value={heroBody}
            onChange={(value) => setAttributes({ heroBody: value })}
            rows={3}
          />
          <TextControl
            label={__("Button Text", "mbn-theme")}
            value={heroButtonText}
            onChange={(value) => setAttributes({ heroButtonText: value })}
          />
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
                    {heroBackgroundVideoUrl && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() =>
                          setAttributes({
                            heroBackgroundVideoId: 0,
                            heroBackgroundVideoUrl: "",
                          })
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {__("Remove Video", "mbn-theme")}
                      </Button>
                    )}
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
                    {heroBackgroundImageUrl && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() =>
                          setAttributes({
                            heroBackgroundImageId: 0,
                            heroBackgroundImageUrl: "",
                          })
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {__("Remove Image", "mbn-theme")}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          )}
        </PanelBody>

        {/* Services Section */}
        <PanelBody
          title={__("Services Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Eyebrow Text", "mbn-theme")}
            value={servicesGridEyebrow}
            onChange={(value) => setAttributes({ servicesGridEyebrow: value })}
            help={__(
              "Small text above the heading (e.g., 'Services')",
              "mbn-theme",
            )}
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={whyChooseHeading}
            onChange={(value) => setAttributes({ whyChooseHeading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={whyChooseSubheading}
            onChange={(value) => setAttributes({ whyChooseSubheading: value })}
            rows={3}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  whyChooseBackgroundImageId: media.id,
                  whyChooseBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={whyChooseBackgroundImageId}
              render={({ open }) => (
                <>
                  {whyChooseBackgroundImageUrl && (
                    <img
                      src={whyChooseBackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {whyChooseBackgroundImageId
                      ? __("Replace Background Image", "mbn-theme")
                      : __("Upload Background Image", "mbn-theme")}
                  </Button>
                  {whyChooseBackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          whyChooseBackgroundImageId: 0,
                          whyChooseBackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <h4 style={{ marginTop: "20px" }}>
            {__("Feature Items", "mbn-theme")}
          </h4>
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>
                {__("Item", "mbn-theme")} {index + 1}
              </strong>
              <TextControl
                label={__("Tag", "mbn-theme")}
                value={item.tag || ""}
                onChange={(value) => {
                  const updated = [...whyChooseItems];
                  updated[index] = { ...updated[index], tag: value };
                  setAttributes({ whyChooseItems: updated });
                }}
                help={__(
                  "Short tag displayed on the card (e.g., 'Tuning', 'Support')",
                  "mbn-theme",
                )}
              />
              <TextControl
                label={__("Title", "mbn-theme")}
                value={item.title}
                onChange={(value) => {
                  const updated = [...whyChooseItems];
                  updated[index] = { ...updated[index], title: value };
                  setAttributes({ whyChooseItems: updated });
                }}
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={item.text}
                onChange={(value) => {
                  const updated = [...whyChooseItems];
                  updated[index] = { ...updated[index], text: value };
                  setAttributes({ whyChooseItems: updated });
                }}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...whyChooseItems];
                    updated[index] = {
                      ...updated[index],
                      iconImageId: media.id,
                      iconImageUrl: media.url,
                    };
                    setAttributes({ whyChooseItems: updated });
                  }}
                  allowedTypes={["image"]}
                  value={item.iconImageId}
                  render={({ open }) => (
                    <>
                      {item.iconImageUrl && (
                        <img
                          src={item.iconImageUrl}
                          alt=""
                          style={{ maxWidth: "100px", marginTop: "10px" }}
                        />
                      )}
                      <Button
                        variant="secondary"
                        onClick={open}
                        style={{ marginTop: "5px" }}
                      >
                        {item.iconImageId
                          ? __("Replace Icon", "mbn-theme")
                          : __("Upload Icon", "mbn-theme")}
                      </Button>
                      {item.iconImageUrl && (
                        <Button
                          isDestructive
                          variant="secondary"
                          onClick={() => {
                            const updated = [...whyChooseItems];
                            updated[index] = {
                              ...updated[index],
                              iconImageId: 0,
                              iconImageUrl: "",
                            };
                            setAttributes({ whyChooseItems: updated });
                          }}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                        >
                          {__("Remove Icon", "mbn-theme")}
                        </Button>
                      )}
                    </>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    whyChooseItems: whyChooseItems.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
                style={{ marginTop: "10px" }}
              >
                {__("Remove Item", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                whyChooseItems: [
                  ...whyChooseItems,
                  { title: "", text: "", iconImageId: 0, iconImageUrl: "" },
                ],
              })
            }
          >
            {__("+ Add Item", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* CTA Section 1 */}
        <PanelBody title={__("CTA Section 1", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={cta1Heading}
            onChange={(value) => setAttributes({ cta1Heading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={cta1Subheading}
            onChange={(value) => setAttributes({ cta1Subheading: value })}
            rows={3}
          />
          <TextControl
            label={__("Button 1 Text", "mbn-theme")}
            value={cta1Button1Text}
            onChange={(value) => setAttributes({ cta1Button1Text: value })}
          />
          <TextControl
            label={__("Button 1 URL", "mbn-theme")}
            value={cta1Button1Url}
            onChange={(value) => setAttributes({ cta1Button1Url: value })}
          />
          <TextControl
            label={__("Button 2 Text", "mbn-theme")}
            value={cta1Button2Text}
            onChange={(value) => setAttributes({ cta1Button2Text: value })}
          />
          <TextControl
            label={__("Button 2 URL", "mbn-theme")}
            value={cta1Button2Url}
            onChange={(value) => setAttributes({ cta1Button2Url: value })}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  cta1BackgroundImageId: media.id,
                  cta1BackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={cta1BackgroundImageId}
              render={({ open }) => (
                <>
                  {cta1BackgroundImageUrl && (
                    <img
                      src={cta1BackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {cta1BackgroundImageId
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {cta1BackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          cta1BackgroundImageId: 0,
                          cta1BackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Process Section */}
        <PanelBody
          title={__("Process Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Eyebrow Text", "mbn-theme")}
            value={processEyebrow}
            onChange={(value) => setAttributes({ processEyebrow: value })}
            help={__(
              "Small text above the heading (e.g., 'Process')",
              "mbn-theme",
            )}
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={servicesHeading}
            onChange={(value) => setAttributes({ servicesHeading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={servicesSubheading}
            onChange={(value) => setAttributes({ servicesSubheading: value })}
            rows={3}
          />

          <h4 style={{ marginTop: "20px" }}>
            {__("Background Image", "mbn-theme")}
          </h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  servicesBackgroundImageId: media.id,
                  servicesBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={servicesBackgroundImageId}
              render={({ open }) => (
                <>
                  {servicesBackgroundImageUrl && (
                    <img
                      src={servicesBackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {servicesBackgroundImageId
                      ? __("Replace Background Image", "mbn-theme")
                      : __("Upload Background Image", "mbn-theme")}
                  </Button>
                  {servicesBackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          servicesBackgroundImageId: 0,
                          servicesBackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <h4 style={{ marginTop: "20px" }}>
            {__("Header Image", "mbn-theme")}
          </h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  servicesHeaderImageId: media.id,
                  servicesHeaderImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={servicesHeaderImageId}
              render={({ open }) => (
                <>
                  {servicesHeaderImageUrl && (
                    <img
                      src={servicesHeaderImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {servicesHeaderImageId
                      ? __("Replace Header Image", "mbn-theme")
                      : __("Upload Header Image", "mbn-theme")}
                  </Button>
                  {servicesHeaderImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          servicesHeaderImageId: 0,
                          servicesHeaderImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Header", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <h4 style={{ marginTop: "20px" }}>
            {__("Service Items", "mbn-theme")}
          </h4>
          {serviceItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>
                {__("Service", "mbn-theme")} {index + 1}
              </strong>
              <TextControl
                label={__("Title", "mbn-theme")}
                value={item.title}
                onChange={(value) => {
                  const updated = [...serviceItems];
                  updated[index] = { ...updated[index], title: value };
                  setAttributes({ serviceItems: updated });
                }}
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={item.text}
                onChange={(value) => {
                  const updated = [...serviceItems];
                  updated[index] = { ...updated[index], text: value };
                  setAttributes({ serviceItems: updated });
                }}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...serviceItems];
                    updated[index] = {
                      ...updated[index],
                      iconImageId: media.id,
                      iconImageUrl: media.url,
                    };
                    setAttributes({ serviceItems: updated });
                  }}
                  allowedTypes={["image"]}
                  value={item.iconImageId}
                  render={({ open }) => (
                    <>
                      {item.iconImageUrl && (
                        <img
                          src={item.iconImageUrl}
                          alt=""
                          style={{ maxWidth: "100px", marginTop: "10px" }}
                        />
                      )}
                      <Button
                        variant="secondary"
                        onClick={open}
                        style={{ marginTop: "5px" }}
                      >
                        {item.iconImageId
                          ? __("Replace Icon", "mbn-theme")
                          : __("Upload Icon", "mbn-theme")}
                      </Button>
                      {item.iconImageUrl && (
                        <Button
                          isDestructive
                          variant="secondary"
                          onClick={() => {
                            const updated = [...serviceItems];
                            updated[index] = {
                              ...updated[index],
                              iconImageId: 0,
                              iconImageUrl: "",
                            };
                            setAttributes({ serviceItems: updated });
                          }}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                        >
                          {__("Remove Icon", "mbn-theme")}
                        </Button>
                      )}
                    </>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    serviceItems: serviceItems.filter((_, i) => i !== index),
                  });
                }}
                style={{ marginTop: "10px" }}
              >
                {__("Remove Service", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                serviceItems: [
                  ...serviceItems,
                  { title: "", text: "", iconImageId: 0, iconImageUrl: "" },
                ],
              })
            }
          >
            {__("+ Add Service", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Services Section 2 */}
        <PanelBody
          title={__("Services Section 2", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={services2Heading}
            onChange={(value) => setAttributes({ services2Heading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={services2Subheading}
            onChange={(value) => setAttributes({ services2Subheading: value })}
            rows={3}
          />

          <SelectControl
            label={__("Background Type", "mbn-theme")}
            value={services2BackgroundType}
            options={[
              { label: __("Image", "mbn-theme"), value: "image" },
              { label: __("Video", "mbn-theme"), value: "video" },
            ]}
            onChange={(value) =>
              setAttributes({ services2BackgroundType: value })
            }
          />

          {services2BackgroundType === "video" && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    services2BackgroundVideoId: media.id,
                    services2BackgroundVideoUrl: media.url,
                  })
                }
                allowedTypes={["video"]}
                value={services2BackgroundVideoId}
                render={({ open }) => (
                  <>
                    {services2BackgroundVideoUrl && (
                      <video
                        src={services2BackgroundVideoUrl}
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                        controls
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {services2BackgroundVideoId
                        ? __("Replace Video", "mbn-theme")
                        : __("Upload Video", "mbn-theme")}
                    </Button>
                    {services2BackgroundVideoUrl && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() =>
                          setAttributes({
                            services2BackgroundVideoId: 0,
                            services2BackgroundVideoUrl: "",
                          })
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {__("Remove Video", "mbn-theme")}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          )}

          {services2BackgroundType === "image" && (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    services2BackgroundImageId: media.id,
                    services2BackgroundImageUrl: media.url,
                  })
                }
                allowedTypes={["image"]}
                value={services2BackgroundImageId}
                render={({ open }) => (
                  <>
                    {services2BackgroundImageUrl && (
                      <img
                        src={services2BackgroundImageUrl}
                        alt=""
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {services2BackgroundImageId
                        ? __("Replace Image", "mbn-theme")
                        : __("Upload Image", "mbn-theme")}
                    </Button>
                    {services2BackgroundImageUrl && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() =>
                          setAttributes({
                            services2BackgroundImageId: 0,
                            services2BackgroundImageUrl: "",
                          })
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {__("Remove Image", "mbn-theme")}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          )}

          <h4 style={{ marginTop: "20px" }}>
            {__("Header Image", "mbn-theme")}
          </h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  services2HeaderImageId: media.id,
                  services2HeaderImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={services2HeaderImageId}
              render={({ open }) => (
                <>
                  {services2HeaderImageUrl && (
                    <img
                      src={services2HeaderImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {services2HeaderImageId
                      ? __("Replace Header Image", "mbn-theme")
                      : __("Upload Header Image", "mbn-theme")}
                  </Button>
                  {services2HeaderImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          services2HeaderImageId: 0,
                          services2HeaderImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Header", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <h4 style={{ marginTop: "20px" }}>
            {__("Service Items", "mbn-theme")}
          </h4>
          {service2Items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>
                {__("Service", "mbn-theme")} {index + 1}
              </strong>
              <TextControl
                label={__("Title", "mbn-theme")}
                value={item.title}
                onChange={(value) => {
                  const updated = [...service2Items];
                  updated[index] = { ...updated[index], title: value };
                  setAttributes({ service2Items: updated });
                }}
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={item.text}
                onChange={(value) => {
                  const updated = [...service2Items];
                  updated[index] = { ...updated[index], text: value };
                  setAttributes({ service2Items: updated });
                }}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...service2Items];
                    updated[index] = {
                      ...updated[index],
                      iconImageId: media.id,
                      iconImageUrl: media.url,
                    };
                    setAttributes({ service2Items: updated });
                  }}
                  allowedTypes={["image"]}
                  value={item.iconImageId}
                  render={({ open }) => (
                    <>
                      {item.iconImageUrl && (
                        <img
                          src={item.iconImageUrl}
                          alt=""
                          style={{ maxWidth: "100px", marginTop: "10px" }}
                        />
                      )}
                      <Button
                        variant="secondary"
                        onClick={open}
                        style={{ marginTop: "5px" }}
                      >
                        {item.iconImageId
                          ? __("Replace Icon", "mbn-theme")
                          : __("Upload Icon", "mbn-theme")}
                      </Button>
                      {item.iconImageUrl && (
                        <Button
                          isDestructive
                          variant="secondary"
                          onClick={() => {
                            const updated = [...service2Items];
                            updated[index] = {
                              ...updated[index],
                              iconImageId: 0,
                              iconImageUrl: "",
                            };
                            setAttributes({ service2Items: updated });
                          }}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                        >
                          {__("Remove Icon", "mbn-theme")}
                        </Button>
                      )}
                    </>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    service2Items: service2Items.filter((_, i) => i !== index),
                  });
                }}
                style={{ marginTop: "10px" }}
              >
                {__("Remove Service", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                service2Items: [
                  ...service2Items,
                  { title: "", text: "", iconImageId: 0, iconImageUrl: "" },
                ],
              })
            }
          >
            {__("+ Add Service", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Testimonials Section */}
        <PanelBody
          title={__("Testimonials Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={testimonialHeading}
            onChange={(value) => setAttributes({ testimonialHeading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={testimonialSubheading}
            onChange={(value) =>
              setAttributes({ testimonialSubheading: value })
            }
            rows={3}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  testimonialBackgroundImageId: media.id,
                  testimonialBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={testimonialBackgroundImageId}
              render={({ open }) => (
                <>
                  {testimonialBackgroundImageUrl && (
                    <img
                      src={testimonialBackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {testimonialBackgroundImageId
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {testimonialBackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          testimonialBackgroundImageId: 0,
                          testimonialBackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>
          <p
            style={{
              marginTop: "15px",
              fontSize: "14px",
              color: "#666",
              fontStyle: "italic",
            }}
          >
            {__(
              "Testimonials are managed via the Testimonial post type in WordPress admin.",
              "mbn-theme",
            )}
          </p>
        </PanelBody>

        {/* FAQ Section */}
        <PanelBody title={__("FAQ Section", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={faqHeading}
            onChange={(value) => setAttributes({ faqHeading: value })}
          />
          <TextareaControl
            label={__("Subheading", "mbn-theme")}
            value={faqSubheading}
            onChange={(value) => setAttributes({ faqSubheading: value })}
            rows={3}
          />

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  faqBackgroundImageId: media.id,
                  faqBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={faqBackgroundImageId}
              render={({ open }) => (
                <>
                  {faqBackgroundImageUrl && (
                    <img
                      src={faqBackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {faqBackgroundImageId
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {faqBackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          faqBackgroundImageId: 0,
                          faqBackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <h4 style={{ marginTop: "20px" }}>{__("FAQ Items", "mbn-theme")}</h4>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>
                {__("FAQ", "mbn-theme")} {index + 1}
              </strong>
              <TextControl
                label={__("Question", "mbn-theme")}
                value={item.question}
                onChange={(value) => {
                  const updated = [...faqItems];
                  updated[index] = { ...updated[index], question: value };
                  setAttributes({ faqItems: updated });
                }}
              />
              <TextareaControl
                label={__("Answer", "mbn-theme")}
                value={item.answer}
                onChange={(value) => {
                  const updated = [...faqItems];
                  updated[index] = { ...updated[index], answer: value };
                  setAttributes({ faqItems: updated });
                }}
                rows={3}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    faqItems: faqItems.filter((_, i) => i !== index),
                  });
                }}
                style={{ marginTop: "10px" }}
              >
                {__("Remove FAQ", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                faqItems: [...faqItems, { question: "", answer: "" }],
              })
            }
          >
            {__("+ Add FAQ", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Five Signs Section */}
        <PanelBody
          title={__("Five Signs Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading Accent", "mbn-theme")}
            value={fiveSignsHeadingAccent}
            onChange={(value) =>
              setAttributes({ fiveSignsHeadingAccent: value })
            }
            help={__('Red accent text (e.g., "5 Signs")', "mbn-theme")}
          />
          <TextareaControl
            label={__("Main Heading", "mbn-theme")}
            value={fiveSignsHeading}
            onChange={(value) => setAttributes({ fiveSignsHeading: value })}
            rows={2}
          />
          <TextareaControl
            label={__("Body Text", "mbn-theme")}
            value={fiveSignsBodyText}
            onChange={(value) => setAttributes({ fiveSignsBodyText: value })}
            rows={3}
          />

          <hr style={{ margin: "16px 0" }} />

          <h3
            style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}
          >
            {__("Checklist Items", "mbn-theme")}
          </h3>
          {fiveSignsChecklistItems.map((item, index) => (
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
                label={`${__("Item", "mbn-theme")} ${index + 1}`}
                value={item}
                onChange={(value) => {
                  const updated = [...fiveSignsChecklistItems];
                  updated[index] = value;
                  setAttributes({ fiveSignsChecklistItems: updated });
                }}
                rows={2}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    fiveSignsChecklistItems: fiveSignsChecklistItems.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
                style={{ marginTop: "10px" }}
              >
                {__("Remove Item", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                fiveSignsChecklistItems: [...fiveSignsChecklistItems, ""],
              })
            }
          >
            {__("+ Add Checklist Item", "mbn-theme")}
          </Button>

          <hr style={{ margin: "16px 0" }} />

          <h3
            style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}
          >
            {__("Photo", "mbn-theme")}
          </h3>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  fiveSignsPhotoId: media.id,
                  fiveSignsPhotoUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={fiveSignsPhotoId}
              render={({ open }) => (
                <>
                  {fiveSignsPhotoUrl && (
                    <img
                      src={fiveSignsPhotoUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {fiveSignsPhotoId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {fiveSignsPhotoId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          fiveSignsPhotoId: 0,
                          fiveSignsPhotoUrl: "",
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
          <TextControl
            label={__("Photo Alt Text", "mbn-theme")}
            value={fiveSignsPhotoAlt}
            onChange={(value) => setAttributes({ fiveSignsPhotoAlt: value })}
            help={__("Describe the image for accessibility", "mbn-theme")}
          />
        </PanelBody>

        {/* CTA Final Section */}
        <PanelBody
          title={__("CTA Final Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Label", "mbn-theme")}
            value={ctaFinalLabel}
            onChange={(value) => setAttributes({ ctaFinalLabel: value })}
            help={__("Small text above the heading", "mbn-theme")}
          />
          <TextareaControl
            label={__("Heading", "mbn-theme")}
            value={ctaFinalHeading}
            onChange={(value) => setAttributes({ ctaFinalHeading: value })}
            rows={3}
          />
          <TextareaControl
            label={__("Text", "mbn-theme")}
            value={ctaFinalText}
            onChange={(value) => setAttributes({ ctaFinalText: value })}
            rows={4}
          />

          <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
            {__("Button 1", "mbn-theme")}
          </h4>
          <TextControl
            label={__("Button 1 Text", "mbn-theme")}
            value={ctaFinalButton1Text}
            onChange={(value) => setAttributes({ ctaFinalButton1Text: value })}
          />
          <TextControl
            label={__("Button 1 URL", "mbn-theme")}
            value={ctaFinalButton1Url}
            onChange={(value) => setAttributes({ ctaFinalButton1Url: value })}
            help={__("Use tel:+1234567890 for phone numbers", "mbn-theme")}
          />

          <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
            {__("Button 2", "mbn-theme")}
          </h4>
          <TextControl
            label={__("Button 2 Text", "mbn-theme")}
            value={ctaFinalButton2Text}
            onChange={(value) => setAttributes({ ctaFinalButton2Text: value })}
          />
          <TextControl
            label={__("Button 2 URL", "mbn-theme")}
            value={ctaFinalButton2Url}
            onChange={(value) => setAttributes({ ctaFinalButton2Url: value })}
          />

          <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
            {__("Background Images", "mbn-theme")}
          </h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  ctaFinalBackgroundImageId: media.id,
                  ctaFinalBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={ctaFinalBackgroundImageId}
              render={({ open }) => (
                <>
                  {ctaFinalBackgroundImageUrl && (
                    <img
                      src={ctaFinalBackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {ctaFinalBackgroundImageId
                      ? __("Replace Background Image", "mbn-theme")
                      : __("Upload Background Image", "mbn-theme")}
                  </Button>
                  {ctaFinalBackgroundImageUrl && (
                    <Button
                      isDestructive
                      variant="secondary"
                      onClick={() =>
                        setAttributes({
                          ctaFinalBackgroundImageId: 0,
                          ctaFinalBackgroundImageUrl: "",
                        })
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      {__("Remove Background", "mbn-theme")}
                    </Button>
                  )}
                </>
              )}
            />
          </MediaUploadCheck>

          <div style={{ marginTop: "15px" }}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    ctaFinalTextureImageId: media.id,
                    ctaFinalTextureImageUrl: media.url,
                  })
                }
                allowedTypes={["image"]}
                value={ctaFinalTextureImageId}
                render={({ open }) => (
                  <>
                    {ctaFinalTextureImageUrl && (
                      <img
                        src={ctaFinalTextureImageUrl}
                        alt=""
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                      />
                    )}
                    <Button variant="secondary" onClick={open}>
                      {ctaFinalTextureImageId
                        ? __("Replace Texture Overlay", "mbn-theme")
                        : __("Upload Texture Overlay", "mbn-theme")}
                    </Button>
                    {ctaFinalTextureImageUrl && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() =>
                          setAttributes({
                            ctaFinalTextureImageId: 0,
                            ctaFinalTextureImageUrl: "",
                          })
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {__("Remove Texture", "mbn-theme")}
                      </Button>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          </div>
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
            {__("🏍️ Service", "mbn-theme")}
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

          {/* Services Section */}
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
              Services Section
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

          {/* Process Section */}
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
              Process Section
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

          {/* Services2 Section */}
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
              Services Section 2
            </p>
            <RichText
              tagName="h2"
              value={services2Heading}
              onChange={(value) => setAttributes({ services2Heading: value })}
              placeholder={__("Services 2 Heading...", "mbn-theme")}
              style={{
                fontSize: "28px",
                fontFamily: "Oxanium, sans-serif",
                fontWeight: "800",
                margin: "0 0 10px",
              }}
            />
            <RichText
              tagName="p"
              value={services2Subheading}
              onChange={(value) =>
                setAttributes({ services2Subheading: value })
              }
              placeholder={__("Services 2 description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px" }}
            />
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
              {service2Items.length} service items configured
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
