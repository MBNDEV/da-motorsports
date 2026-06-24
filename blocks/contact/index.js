import {
  registerBlockType,
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@mbn/editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  SelectControl,
  ToggleControl,
  IconButton,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: function Edit({ attributes, setAttributes }) {
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
      contactHeadingAccent,
      contactSubheading,
      contactDividerId,
      contactDividerUrl,
      contactDetails,
      gravityFormShortcode,
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
      className: "mbn-contact-page-editor",
    });

    return (
      <Fragment>
        <InspectorControls>
          {/* Hero Section */}
          <PanelBody
            title={__("Hero Section", "mbn-theme")}
            initialOpen={false}
          >
            <TextControl
              label={__("Hero Eyebrow", "mbn-theme")}
              value={heroEyebrow}
              onChange={(value) => setAttributes({ heroEyebrow: value })}
            />

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {heroBgPhotoUrl
                        ? __("Replace Background Photo", "mbn-theme")
                        : __("Select Background Photo", "mbn-theme")}
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
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {heroBgPhotoUrl && (
                      <img
                        src={heroBgPhotoUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {heroBgTextureUrl
                        ? __("Replace Background Texture", "mbn-theme")
                        : __("Select Background Texture", "mbn-theme")}
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
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {heroBgTextureUrl && (
                      <img
                        src={heroBgTextureUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {heroDividerUrl
                        ? __("Replace Divider", "mbn-theme")
                        : __("Select Divider", "mbn-theme")}
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
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {heroDividerUrl && (
                      <img
                        src={heroDividerUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <h3>{__("Hero Buttons", "mbn-theme")}</h3>
            {heroButtons.map((button, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  marginBottom: "12px",
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
                    { label: "Ghost", value: "ghost" },
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
                    { label: "", url: "#", style: "ghost" },
                  ],
                })
              }
            >
              {__("+ Add Button", "mbn-theme")}
            </Button>
          </PanelBody>

          {/* Contact Info Section */}
          <PanelBody
            title={__("Contact Info Section", "mbn-theme")}
            initialOpen={false}
          >
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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {contactMascotUrl
                        ? __("Replace Mascot", "mbn-theme")
                        : __("Select Mascot", "mbn-theme")}
                    </Button>
                    {contactMascotId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({
                            contactMascotId: 0,
                            contactMascotUrl: "",
                          })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {contactMascotUrl && (
                      <img
                        src={contactMascotUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <TextControl
              label={__("Contact Eyebrow", "mbn-theme")}
              value={contactEyebrow}
              onChange={(value) => setAttributes({ contactEyebrow: value })}
            />
            <TextControl
              label={__("Contact Heading", "mbn-theme")}
              value={contactHeading}
              onChange={(value) => setAttributes({ contactHeading: value })}
            />
            <TextControl
              label={__("Contact Heading Accent", "mbn-theme")}
              value={contactHeadingAccent}
              onChange={(value) =>
                setAttributes({ contactHeadingAccent: value })
              }
            />
            <TextControl
              label={__("Contact Subheading", "mbn-theme")}
              value={contactSubheading}
              onChange={(value) => setAttributes({ contactSubheading: value })}
            />

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {contactDividerUrl
                        ? __("Replace Divider", "mbn-theme")
                        : __("Select Divider", "mbn-theme")}
                    </Button>
                    {contactDividerId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({
                            contactDividerId: 0,
                            contactDividerUrl: "",
                          })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {contactDividerUrl && (
                      <img
                        src={contactDividerUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <h3>{__("Contact Details", "mbn-theme")}</h3>
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  marginBottom: "12px",
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
                  label={__("Is Link", "mbn-theme")}
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
                  label={__("Is Accent Color", "mbn-theme")}
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
              {__("+ Add Detail", "mbn-theme")}
            </Button>

            <TextControl
              label={__("Gravity Form Shortcode", "mbn-theme")}
              value={gravityFormShortcode}
              onChange={(value) =>
                setAttributes({ gravityFormShortcode: value })
              }
              help={__(
                'Example: [gravityform id="1" title="true"]',
                "mbn-theme",
              )}
            />
          </PanelBody>

          {/* Testimonial Section */}
          <PanelBody
            title={__("Testimonial Section", "mbn-theme")}
            initialOpen={false}
          >
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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {testimonialBgUrl
                        ? __("Replace Background", "mbn-theme")
                        : __("Select Background", "mbn-theme")}
                    </Button>
                    {testimonialBgId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({
                            testimonialBgId: 0,
                            testimonialBgUrl: "",
                          })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {testimonialBgUrl && (
                      <img
                        src={testimonialBgUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <TextControl
              label={__("Testimonial Heading", "mbn-theme")}
              value={testimonialHeading}
              onChange={(value) => setAttributes({ testimonialHeading: value })}
            />
            <TextareaControl
              label={__("Testimonial Description", "mbn-theme")}
              value={testimonialDescription}
              onChange={(value) =>
                setAttributes({ testimonialDescription: value })
              }
            />

            <h3>{__("Testimonials", "mbn-theme")}</h3>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  marginBottom: "12px",
                }}
              >
                <TextareaControl
                  label={__("Quote", "mbn-theme")}
                  value={testimonial.quote}
                  rows={4}
                  onChange={(value) => {
                    const updated = [...testimonials];
                    updated[index] = { ...updated[index], quote: value };
                    setAttributes({ testimonials: updated });
                  }}
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
                      <div style={{ marginBottom: "8px" }}>
                        <Button onClick={open} variant="secondary">
                          {testimonial.avatarUrl
                            ? __("Replace Avatar", "mbn-theme")
                            : __("Select Avatar", "mbn-theme")}
                        </Button>
                        {testimonial.avatarId > 0 && (
                          <Button
                            variant="link"
                            isDestructive
                            onClick={() => {
                              const updated = [...testimonials];
                              updated[index] = {
                                ...updated[index],
                                avatarId: 0,
                                avatarUrl: "",
                              };
                              setAttributes({ testimonials: updated });
                            }}
                            style={{ marginLeft: "8px" }}
                          >
                            {__("Remove", "mbn-theme")}
                          </Button>
                        )}
                        {testimonial.avatarUrl && (
                          <img
                            src={testimonial.avatarUrl}
                            alt=""
                            style={{ marginTop: "8px", maxWidth: "100px" }}
                          />
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
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
                      <div style={{ marginBottom: "8px" }}>
                        <Button onClick={open} variant="secondary">
                          {testimonial.starsUrl
                            ? __("Replace Stars", "mbn-theme")
                            : __("Select Stars", "mbn-theme")}
                        </Button>
                        {testimonial.starsId > 0 && (
                          <Button
                            variant="link"
                            isDestructive
                            onClick={() => {
                              const updated = [...testimonials];
                              updated[index] = {
                                ...updated[index],
                                starsId: 0,
                                starsUrl: "",
                              };
                              setAttributes({ testimonials: updated });
                            }}
                            style={{ marginLeft: "8px" }}
                          >
                            {__("Remove", "mbn-theme")}
                          </Button>
                        )}
                        {testimonial.starsUrl && (
                          <img
                            src={testimonial.starsUrl}
                            alt=""
                            style={{ marginTop: "8px", maxWidth: "100px" }}
                          />
                        )}
                      </div>
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
              {__("+ Add Testimonial", "mbn-theme")}
            </Button>
          </PanelBody>

          {/* CTA Section */}
          <PanelBody title={__("CTA Section", "mbn-theme")} initialOpen={false}>
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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {ctaBgPhotoUrl
                        ? __("Replace Background Photo", "mbn-theme")
                        : __("Select Background Photo", "mbn-theme")}
                    </Button>
                    {ctaBgPhotoId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({ ctaBgPhotoId: 0, ctaBgPhotoUrl: "" })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {ctaBgPhotoUrl && (
                      <img
                        src={ctaBgPhotoUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {ctaBgTextureUrl
                        ? __("Replace Background Texture", "mbn-theme")
                        : __("Select Background Texture", "mbn-theme")}
                    </Button>
                    {ctaBgTextureId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({
                            ctaBgTextureId: 0,
                            ctaBgTextureUrl: "",
                          })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {ctaBgTextureUrl && (
                      <img
                        src={ctaBgTextureUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <TextControl
              label={__("CTA Heading", "mbn-theme")}
              value={ctaHeading}
              onChange={(value) => setAttributes({ ctaHeading: value })}
            />

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
                  <div style={{ marginBottom: "16px" }}>
                    <Button onClick={open} variant="secondary">
                      {ctaDividerUrl
                        ? __("Replace Divider", "mbn-theme")
                        : __("Select Divider", "mbn-theme")}
                    </Button>
                    {ctaDividerId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({ ctaDividerId: 0, ctaDividerUrl: "" })
                        }
                        style={{ marginLeft: "8px" }}
                      >
                        {__("Remove", "mbn-theme")}
                      </Button>
                    )}
                    {ctaDividerUrl && (
                      <img
                        src={ctaDividerUrl}
                        alt=""
                        style={{ marginTop: "8px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>

            <TextareaControl
              label={__("CTA Body", "mbn-theme")}
              value={ctaBody}
              onChange={(value) => setAttributes({ ctaBody: value })}
            />

            <h3>{__("CTA Buttons", "mbn-theme")}</h3>
            {ctaButtons.map((button, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  marginBottom: "12px",
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
                    { label: "Ghost", value: "ghost" },
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
                    { label: "", url: "#", style: "ghost" },
                  ],
                })
              }
            >
              {__("+ Add Button", "mbn-theme")}
            </Button>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div
            style={{
              padding: "20px",
              background: "#f0f0f0",
              border: "2px dashed #ccc",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Contact Page Block</h3>

            {/* Hero Section Preview */}
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "white",
                borderLeft: "4px solid #e50b07",
              }}
            >
              <h4 style={{ marginTop: 0 }}>
                {__("Hero Section", "mbn-theme")}
              </h4>
              <RichText
                tagName="p"
                value={heroEyebrow}
                onChange={(value) => setAttributes({ heroEyebrow: value })}
                placeholder={__("Enter hero eyebrow...", "mbn-theme")}
                style={{ fontSize: "14px", color: "#666" }}
              />
              <RichText
                tagName="h1"
                value={heroHeading}
                onChange={(value) => setAttributes({ heroHeading: value })}
                placeholder={__("Enter hero heading...", "mbn-theme")}
                style={{ fontSize: "24px", fontWeight: "bold" }}
              />
              <p style={{ fontSize: "12px", color: "#999" }}>
                {heroButtons.length} button(s) configured
              </p>
            </div>

            {/* Contact Info Preview */}
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "white",
                borderLeft: "4px solid #191919",
              }}
            >
              <h4 style={{ marginTop: 0 }}>
                {__("Contact Info", "mbn-theme")}
              </h4>
              <RichText
                tagName="h2"
                value={contactHeading}
                onChange={(value) => setAttributes({ contactHeading: value })}
                placeholder={__("Enter contact heading...", "mbn-theme")}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
              <RichText
                tagName="span"
                value={contactHeadingAccent}
                onChange={(value) =>
                  setAttributes({ contactHeadingAccent: value })
                }
                placeholder={__("Accent word...", "mbn-theme")}
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#e50b07",
                }}
              />
              <p style={{ fontSize: "12px", color: "#999" }}>
                {contactDetails.length} contact detail(s) configured
              </p>
            </div>

            {/* Testimonial Preview */}
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "white",
                borderLeft: "4px solid #000",
              }}
            >
              <h4 style={{ marginTop: 0 }}>
                {__("Testimonials", "mbn-theme")}
              </h4>
              <RichText
                tagName="h2"
                value={testimonialHeading}
                onChange={(value) =>
                  setAttributes({ testimonialHeading: value })
                }
                placeholder={__("Enter testimonial heading...", "mbn-theme")}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
              <RichText
                tagName="p"
                value={testimonialDescription}
                onChange={(value) =>
                  setAttributes({ testimonialDescription: value })
                }
                placeholder={__("Enter description...", "mbn-theme")}
                style={{ fontSize: "14px" }}
              />
              <p style={{ fontSize: "12px", color: "#999" }}>
                {testimonials.length} testimonial(s) configured
              </p>
            </div>

            {/* CTA Preview */}
            <div
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "white",
                borderLeft: "4px solid #e50b07",
              }}
            >
              <h4 style={{ marginTop: 0 }}>{__("CTA Section", "mbn-theme")}</h4>
              <RichText
                tagName="h2"
                value={ctaHeading}
                onChange={(value) => setAttributes({ ctaHeading: value })}
                placeholder={__("Enter CTA heading...", "mbn-theme")}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
              <RichText
                tagName="p"
                value={ctaBody}
                onChange={(value) => setAttributes({ ctaBody: value })}
                placeholder={__("Enter CTA body...", "mbn-theme")}
                style={{ fontSize: "14px" }}
              />
              <p style={{ fontSize: "12px", color: "#999" }}>
                {ctaButtons.length} button(s) configured
              </p>
            </div>

            <p style={{ fontSize: "12px", color: "#666", marginBottom: 0 }}>
              {__(
                "Use the sidebar to edit all content and upload images →",
                "mbn-theme",
              )}
            </p>
          </div>
        </div>
      </Fragment>
    );
  },

  save: () => null,
});
