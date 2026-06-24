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
  SelectControl,
  Button,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heroEyebrow,
    heroHeading,
    heroBgPhotoId,
    heroBgPhotoUrl,
    heroBgTextureId,
    heroBgTextureUrl,
    heroDividerId,
    heroDividerUrl,
    heroButtons,
    contactMascotId,
    contactMascotUrl,
    contactEyebrow,
    contactHeading,
    contactSubheading,
    contactDividerId,
    contactDividerUrl,
    contactDetails,
    formNameLabel,
    formEmailLabel,
    formMessageLabel,
    formMessagePlaceholder,
    formCheckboxLabel,
    formSubmitLabel,
    testimonialBgId,
    testimonialBgUrl,
    testimonialHeading,
    testimonialDescription,
    testimonials,
    testimonialArrowPrevId,
    testimonialArrowPrevUrl,
    testimonialArrowNextId,
    testimonialArrowNextUrl,
    ctaBgPhotoId,
    ctaBgPhotoUrl,
    ctaBgTextureId,
    ctaBgTextureUrl,
    ctaHeading,
    ctaDividerId,
    ctaDividerUrl,
    ctaBody,
    ctaButtons,
  } = attributes;

  const blockProps = useBlockProps({
    className: "mbn-contact-us-editor",
  });

  return (
    <>
      <InspectorControls>
        {/* Hero Background Images */}
        <PanelBody
          title={__("Hero Background Images", "mbn-theme")}
          initialOpen={true}
        >
          <p>
            <strong>{__("Background Photo", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  heroBgPhotoId: media.id,
                  heroBgPhotoUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={heroBgPhotoId}
              render={({ open }) => (
                <>
                  {heroBgPhotoUrl && (
                    <img
                      src={heroBgPhotoUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {heroBgPhotoId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                  {heroBgPhotoId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          heroBgPhotoId: 0,
                          heroBgPhotoUrl: "",
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
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Hero Buttons */}
        <PanelBody title={__("Hero CTA Buttons", "mbn-theme")}>
          {heroButtons.map((button, index) => (
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
                label={__("Button Label", "mbn-theme")}
                value={button.label}
                onChange={(value) => {
                  const updated = [...heroButtons];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ heroButtons: updated });
                }}
              />
              <TextControl
                label={__("Button URL", "mbn-theme")}
                value={button.url}
                onChange={(value) => {
                  const updated = [...heroButtons];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ heroButtons: updated });
                }}
              />
              <SelectControl
                label={__("Button Style", "mbn-theme")}
                value={button.style}
                options={[
                  { label: "Ghost (Black)", value: "ghost" },
                  { label: "Red", value: "red" },
                ]}
                onChange={(value) => {
                  const updated = [...heroButtons];
                  updated[index] = { ...updated[index], style: value };
                  setAttributes({ heroButtons: updated });
                }}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    heroButtons: heroButtons.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove Button", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                heroButtons: [
                  ...heroButtons,
                  { label: "", url: "", style: "ghost" },
                ],
              })
            }
          >
            {__("Add Button", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Contact Section Images */}
        <PanelBody title={__("Contact Section Images", "mbn-theme")}>
          <p>
            <strong>{__("Mascot Image", "mbn-theme")}</strong>
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
            <strong>{__("Divider Line", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  contactDividerId: media.id,
                  contactDividerUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={contactDividerId}
              render={({ open }) => (
                <>
                  {contactDividerUrl && (
                    <img
                      src={contactDividerUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {contactDividerId
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
              <ToggleControl
                label={__("Red Accent?", "mbn-theme")}
                checked={detail.isAccent}
                onChange={(value) => {
                  const updated = [...contactDetails];
                  updated[index] = { ...updated[index], isAccent: value };
                  setAttributes({ contactDetails: updated });
                }}
              />
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
                  {
                    label: "",
                    value: "",
                    isLink: false,
                    linkUrl: "",
                    isAccent: false,
                  },
                ],
              })
            }
          >
            {__("Add Detail", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Form Labels */}
        <PanelBody title={__("Contact Form Labels", "mbn-theme")}>
          <TextControl
            label={__("Name Label", "mbn-theme")}
            value={formNameLabel}
            onChange={(value) => setAttributes({ formNameLabel: value })}
          />
          <TextControl
            label={__("Email Label", "mbn-theme")}
            value={formEmailLabel}
            onChange={(value) => setAttributes({ formEmailLabel: value })}
          />
          <TextControl
            label={__("Message Label", "mbn-theme")}
            value={formMessageLabel}
            onChange={(value) => setAttributes({ formMessageLabel: value })}
          />
          <TextControl
            label={__("Message Placeholder", "mbn-theme")}
            value={formMessagePlaceholder}
            onChange={(value) =>
              setAttributes({ formMessagePlaceholder: value })
            }
          />
          <TextControl
            label={__("Checkbox Label", "mbn-theme")}
            value={formCheckboxLabel}
            onChange={(value) => setAttributes({ formCheckboxLabel: value })}
          />
          <TextControl
            label={__("Submit Button Label", "mbn-theme")}
            value={formSubmitLabel}
            onChange={(value) => setAttributes({ formSubmitLabel: value })}
          />
        </PanelBody>

        {/* Testimonial Section */}
        <PanelBody title={__("Testimonial Background", "mbn-theme")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  testimonialBgId: media.id,
                  testimonialBgUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={testimonialBgId}
              render={({ open }) => (
                <>
                  {testimonialBgUrl && (
                    <img
                      src={testimonialBgUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {testimonialBgId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Testimonials */}
        <PanelBody title={__("Testimonials", "mbn-theme")}>
          {testimonials.map((testimonial, index) => (
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
                label={__("Quote", "mbn-theme")}
                value={testimonial.quote}
                onChange={(value) => {
                  const updated = [...testimonials];
                  updated[index] = { ...updated[index], quote: value };
                  setAttributes({ testimonials: updated });
                }}
                rows={4}
              />
              <TextControl
                label={__("Name", "mbn-theme")}
                value={testimonial.name}
                onChange={(value) => {
                  const updated = [...testimonials];
                  updated[index] = { ...updated[index], name: value };
                  setAttributes({ testimonials: updated });
                }}
              />
              <TextControl
                label={__("Role", "mbn-theme")}
                value={testimonial.role}
                onChange={(value) => {
                  const updated = [...testimonials];
                  updated[index] = { ...updated[index], role: value };
                  setAttributes({ testimonials: updated });
                }}
              />
              <p>
                <strong>{__("Avatar Image", "mbn-theme")}</strong>
              </p>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...testimonials];
                    updated[index] = {
                      ...updated[index],
                      avatarId: media.id,
                      avatarUrl: media.url,
                    };
                    setAttributes({ testimonials: updated });
                  }}
                  allowedTypes={["image"]}
                  value={testimonial.avatarId}
                  render={({ open }) => (
                    <>
                      {testimonial.avatarUrl && (
                        <img
                          src={testimonial.avatarUrl}
                          alt=""
                          style={{ width: "48px", marginBottom: "8px" }}
                        />
                      )}
                      <Button variant="secondary" onClick={open}>
                        {testimonial.avatarId
                          ? __("Replace", "mbn-theme")
                          : __("Upload", "mbn-theme")}
                      </Button>
                    </>
                  )}
                />
              </MediaUploadCheck>
              <p>
                <strong>{__("Stars Image", "mbn-theme")}</strong>
              </p>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...testimonials];
                    updated[index] = {
                      ...updated[index],
                      starsId: media.id,
                      starsUrl: media.url,
                    };
                    setAttributes({ testimonials: updated });
                  }}
                  allowedTypes={["image"]}
                  value={testimonial.starsId}
                  render={({ open }) => (
                    <>
                      {testimonial.starsUrl && (
                        <img
                          src={testimonial.starsUrl}
                          alt=""
                          style={{ width: "100px", marginBottom: "8px" }}
                        />
                      )}
                      <Button variant="secondary" onClick={open}>
                        {testimonial.starsId
                          ? __("Replace", "mbn-theme")
                          : __("Upload", "mbn-theme")}
                      </Button>
                    </>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    testimonials: testimonials.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove Testimonial", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                testimonials: [
                  ...testimonials,
                  {
                    quote: "",
                    name: "",
                    role: "",
                    avatarId: 0,
                    avatarUrl: "",
                    starsId: 0,
                    starsUrl: "",
                  },
                ],
              })
            }
          >
            {__("Add Testimonial", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Testimonial Navigation */}
        <PanelBody title={__("Testimonial Navigation Arrows", "mbn-theme")}>
          <p>
            <strong>{__("Previous Arrow", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  testimonialArrowPrevId: media.id,
                  testimonialArrowPrevUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={testimonialArrowPrevId}
              render={({ open }) => (
                <>
                  {testimonialArrowPrevUrl && (
                    <img
                      src={testimonialArrowPrevUrl}
                      alt=""
                      style={{ width: "24px", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {testimonialArrowPrevId
                      ? __("Replace", "mbn-theme")
                      : __("Upload", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>

          <hr style={{ margin: "16px 0" }} />

          <p>
            <strong>{__("Next Arrow", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  testimonialArrowNextId: media.id,
                  testimonialArrowNextUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={testimonialArrowNextId}
              render={({ open }) => (
                <>
                  {testimonialArrowNextUrl && (
                    <img
                      src={testimonialArrowNextUrl}
                      alt=""
                      style={{ width: "24px", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {testimonialArrowNextId
                      ? __("Replace", "mbn-theme")
                      : __("Upload", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* CTA Background Images */}
        <PanelBody title={__("CTA Background Images", "mbn-theme")}>
          <p>
            <strong>{__("Background Photo", "mbn-theme")}</strong>
          </p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  ctaBgPhotoId: media.id,
                  ctaBgPhotoUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={ctaBgPhotoId}
              render={({ open }) => (
                <>
                  {ctaBgPhotoUrl && (
                    <img
                      src={ctaBgPhotoUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {ctaBgPhotoId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
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
                  ctaBgTextureId: media.id,
                  ctaBgTextureUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={ctaBgTextureId}
              render={({ open }) => (
                <>
                  {ctaBgTextureUrl && (
                    <img
                      src={ctaBgTextureUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {ctaBgTextureId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
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
                  ctaDividerId: media.id,
                  ctaDividerUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={ctaDividerId}
              render={({ open }) => (
                <>
                  {ctaDividerUrl && (
                    <img
                      src={ctaDividerUrl}
                      alt=""
                      style={{ width: "100%", marginBottom: "8px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {ctaDividerId
                      ? __("Replace Image", "mbn-theme")
                      : __("Upload Image", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* CTA Buttons */}
        <PanelBody title={__("CTA Buttons", "mbn-theme")}>
          {ctaButtons.map((button, index) => (
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
                label={__("Button Label", "mbn-theme")}
                value={button.label}
                onChange={(value) => {
                  const updated = [...ctaButtons];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ ctaButtons: updated });
                }}
              />
              <TextControl
                label={__("Button URL", "mbn-theme")}
                value={button.url}
                onChange={(value) => {
                  const updated = [...ctaButtons];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ ctaButtons: updated });
                }}
              />
              <SelectControl
                label={__("Button Style", "mbn-theme")}
                value={button.style}
                options={[
                  { label: "Ghost (Black)", value: "ghost" },
                  { label: "Red", value: "red" },
                ]}
                onChange={(value) => {
                  const updated = [...ctaButtons];
                  updated[index] = { ...updated[index], style: value };
                  setAttributes({ ctaButtons: updated });
                }}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    ctaButtons: ctaButtons.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove Button", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                ctaButtons: [
                  ...ctaButtons,
                  { label: "", url: "", style: "ghost" },
                ],
              })
            }
          >
            {__("Add Button", "mbn-theme")}
          </Button>
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
            <p style={{ fontSize: "13px", color: "#ccc", marginTop: "8px" }}>
              {heroButtons.length} {__("CTA button(s)", "mbn-theme")}
            </p>
          </div>

          {/* Contact Section Preview */}
          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#191919",
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
              {__("✉️ Contact Form Section", "mbn-theme")}
            </p>
            <RichText
              tagName="p"
              style={{ fontSize: "12px", marginBottom: "4px" }}
              value={contactEyebrow}
              onChange={(value) => setAttributes({ contactEyebrow: value })}
              placeholder={__("Contact eyebrow…", "mbn-theme")}
            />
            <RichText
              tagName="h2"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              value={contactHeading}
              onChange={(value) => setAttributes({ contactHeading: value })}
              placeholder={__("Contact heading…", "mbn-theme")}
            />
            <RichText
              tagName="p"
              style={{ fontSize: "14px", marginBottom: "8px" }}
              value={contactSubheading}
              onChange={(value) => setAttributes({ contactSubheading: value })}
              placeholder={__("Contact subheading…", "mbn-theme")}
            />
            <p style={{ fontSize: "13px", color: "#ccc" }}>
              {contactDetails.length} {__("contact detail(s)", "mbn-theme")}
            </p>
          </div>

          {/* Testimonial Section Preview */}
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
              {__("⭐ Testimonials", "mbn-theme")}
            </p>
            <RichText
              tagName="h2"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              value={testimonialHeading}
              onChange={(value) => setAttributes({ testimonialHeading: value })}
              placeholder={__("Testimonial heading…", "mbn-theme")}
            />
            <RichText
              tagName="p"
              style={{ fontSize: "14px", marginBottom: "8px" }}
              value={testimonialDescription}
              onChange={(value) =>
                setAttributes({ testimonialDescription: value })
              }
              placeholder={__("Testimonial description…", "mbn-theme")}
            />
            <p style={{ fontSize: "13px", color: "#666" }}>
              {testimonials.length} {__("testimonial(s)", "mbn-theme")}
            </p>
          </div>

          {/* CTA Section Preview */}
          <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {__("🎯 CTA Section", "mbn-theme")}
            </p>
            <RichText
              tagName="h2"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              value={ctaHeading}
              onChange={(value) => setAttributes({ ctaHeading: value })}
              placeholder={__("CTA heading…", "mbn-theme")}
            />
            <RichText
              tagName="p"
              style={{ fontSize: "14px", marginBottom: "8px" }}
              value={ctaBody}
              onChange={(value) => setAttributes({ ctaBody: value })}
              placeholder={__("CTA body…", "mbn-theme")}
            />
            <p style={{ fontSize: "13px", color: "#ccc" }}>
              {ctaButtons.length} {__("CTA button(s)", "mbn-theme")}
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
