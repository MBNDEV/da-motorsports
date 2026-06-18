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
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heroHeading,
    heroBody,
    heroButtonText,
    heroButtonUrl,
    heroBackgroundImageId,
    heroBackgroundImageUrl,
    whyChooseHeading,
    whyChooseSubheading,
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
    cta2Heading,
    cta2Subheading,
    cta2ButtonText,
    cta2ButtonUrl,
    cta2BackgroundImageId,
    cta2BackgroundImageUrl,
    footerNewsletterText,
    footerConsentText,
    footerServices,
    footerCompanyLinks,
    footerSocialLinks,
    footerCopyright,
    footerLegalLinks,
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
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {heroBackgroundImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          heroBackgroundImageId: 0,
                          heroBackgroundImageUrl: "",
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

        {/* Why Choose Section */}
        <PanelBody
          title={__("Why Choose Section", "mbn-theme")}
          initialOpen={false}
        >
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
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {whyChooseBackgroundImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          whyChooseBackgroundImageId: 0,
                          whyChooseBackgroundImageUrl: "",
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
          <p>
            <strong>{__("Feature Items", "mbn-theme")}</strong>
          </p>
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
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
                      <Button variant="secondary" onClick={open}>
                        {item.iconImageId
                          ? __("Replace Icon", "mbn-theme")
                          : __("Upload Icon", "mbn-theme")}
                      </Button>
                      {item.iconImageId > 0 && (
                        <Button
                          variant="link"
                          isDestructive
                          onClick={() => {
                            const updated = [...whyChooseItems];
                            updated[index] = {
                              ...updated[index],
                              iconImageId: 0,
                              iconImageUrl: "",
                            };
                            setAttributes({ whyChooseItems: updated });
                          }}
                        >
                          {__("Remove", "mbn-theme")}
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
            {__("Add Feature", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Services Section */}
        <PanelBody
          title={__("Services Section", "mbn-theme")}
          initialOpen={false}
        >
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
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                  {servicesBackgroundImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          servicesBackgroundImageId: 0,
                          servicesBackgroundImageUrl: "",
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
                  {servicesHeaderImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          servicesHeaderImageId: 0,
                          servicesHeaderImageUrl: "",
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
          <p>
            <strong>{__("Service Items", "mbn-theme")}</strong>
          </p>
          {serviceItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
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
                      <Button variant="secondary" onClick={open}>
                        {item.iconImageId
                          ? __("Replace Icon", "mbn-theme")
                          : __("Upload Icon", "mbn-theme")}
                      </Button>
                      {item.iconImageId > 0 && (
                        <Button
                          variant="link"
                          isDestructive
                          onClick={() => {
                            const updated = [...serviceItems];
                            updated[index] = {
                              ...updated[index],
                              iconImageId: 0,
                              iconImageUrl: "",
                            };
                            setAttributes({ serviceItems: updated });
                          }}
                        >
                          {__("Remove", "mbn-theme")}
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
            {__("Add Service", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* CTA Section 1 */}
        <PanelBody title={__("CTA Section 1", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Button 1 URL", "mbn-theme")}
            value={cta1Button1Url}
            onChange={(value) => setAttributes({ cta1Button1Url: value })}
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
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Testimonials */}
        <PanelBody title={__("Testimonials", "mbn-theme")} initialOpen={false}>
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
                  {testimonialBackgroundImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          testimonialBackgroundImageId: 0,
                          testimonialBackgroundImageUrl: "",
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
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
                label={__("Author Name", "mbn-theme")}
                value={testimonial.authorName}
                onChange={(value) => {
                  const updated = [...testimonials];
                  updated[index] = { ...updated[index], authorName: value };
                  setAttributes({ testimonials: updated });
                }}
              />
              <TextControl
                label={__("Author Title", "mbn-theme")}
                value={testimonial.authorTitle}
                onChange={(value) => {
                  const updated = [...testimonials];
                  updated[index] = { ...updated[index], authorTitle: value };
                  setAttributes({ testimonials: updated });
                }}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...testimonials];
                    updated[index] = {
                      ...updated[index],
                      authorImageId: media.id,
                      authorImageUrl: media.url,
                    };
                    setAttributes({ testimonials: updated });
                  }}
                  allowedTypes={["image"]}
                  value={testimonial.authorImageId}
                  render={({ open }) => (
                    <>
                      <Button variant="secondary" onClick={open}>
                        {testimonial.authorImageId
                          ? __("Replace Photo", "mbn-theme")
                          : __("Upload Photo", "mbn-theme")}
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
                    authorName: "",
                    authorTitle: "",
                    authorImageId: 0,
                    authorImageUrl: "",
                    rating: 5,
                  },
                ],
              })
            }
          >
            {__("Add Testimonial", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Contact/Locations */}
        <PanelBody title={__("Locations", "mbn-theme")} initialOpen={false}>
          {locations.map((location, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Title", "mbn-theme")}
                value={location.title}
                onChange={(value) => {
                  const updated = [...locations];
                  updated[index] = { ...updated[index], title: value };
                  setAttributes({ locations: updated });
                }}
              />
              <TextControl
                label={__("Subtitle", "mbn-theme")}
                value={location.subtitle}
                onChange={(value) => {
                  const updated = [...locations];
                  updated[index] = { ...updated[index], subtitle: value };
                  setAttributes({ locations: updated });
                }}
              />
              <TextControl
                label={__("Button Text", "mbn-theme")}
                value={location.buttonText}
                onChange={(value) => {
                  const updated = [...locations];
                  updated[index] = { ...updated[index], buttonText: value };
                  setAttributes({ locations: updated });
                }}
              />
              <TextControl
                label={__("Button URL", "mbn-theme")}
                value={location.buttonUrl}
                onChange={(value) => {
                  const updated = [...locations];
                  updated[index] = { ...updated[index], buttonUrl: value };
                  setAttributes({ locations: updated });
                }}
              />
              <ToggleControl
                label={__("Active Location", "mbn-theme")}
                checked={location.isActive}
                onChange={(value) => {
                  const updated = locations.map((loc, i) => ({
                    ...loc,
                    isActive: i === index ? value : false,
                  }));
                  setAttributes({ locations: updated });
                }}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    const updated = [...locations];
                    updated[index] = {
                      ...updated[index],
                      mapImageId: media.id,
                      mapImageUrl: media.url,
                    };
                    setAttributes({ locations: updated });
                  }}
                  allowedTypes={["image"]}
                  value={location.mapImageId}
                  render={({ open }) => (
                    <>
                      <Button variant="secondary" onClick={open}>
                        {location.mapImageId
                          ? __("Replace Map", "mbn-theme")
                          : __("Upload Map", "mbn-theme")}
                      </Button>
                    </>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    locations: locations.filter((_, i) => i !== index),
                  });
                }}
              >
                {__("Remove Location", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                locations: [
                  ...locations,
                  {
                    title: "",
                    subtitle: "",
                    buttonText: "get directions",
                    buttonUrl: "#",
                    mapImageId: 0,
                    mapImageUrl: "",
                    isActive: false,
                  },
                ],
              })
            }
          >
            {__("Add Location", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* FAQ */}
        <PanelBody title={__("FAQ Section", "mbn-theme")} initialOpen={false}>
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
                  {faqBackgroundImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          faqBackgroundImageId: 0,
                          faqBackgroundImageUrl: "",
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
          {faqItems.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextControl
                label={__("Question", "mbn-theme")}
                value={faq.question}
                onChange={(value) => {
                  const updated = [...faqItems];
                  updated[index] = { ...updated[index], question: value };
                  setAttributes({ faqItems: updated });
                }}
              />
              <TextareaControl
                label={__("Answer", "mbn-theme")}
                value={faq.answer}
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
            {__("Add FAQ", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* CTA Section 2 */}
        <PanelBody title={__("CTA Section 2", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Button URL", "mbn-theme")}
            value={cta2ButtonUrl}
            onChange={(value) => setAttributes({ cta2ButtonUrl: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  cta2BackgroundImageId: media.id,
                  cta2BackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={cta2BackgroundImageId}
              render={({ open }) => (
                <>
                  {cta2BackgroundImageUrl && (
                    <img
                      src={cta2BackgroundImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {cta2BackgroundImageId
                      ? __("Replace Background", "mbn-theme")
                      : __("Upload Background", "mbn-theme")}
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* Footer Services */}
        <PanelBody
          title={__("Footer - Services Links", "mbn-theme")}
          initialOpen={false}
        >
          {footerServices.map((link, index) => (
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
                  const updated = [...footerServices];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ footerServices: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...footerServices];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ footerServices: updated });
                }}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    footerServices: footerServices.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Link", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                footerServices: [...footerServices, { label: "", url: "#" }],
              })
            }
          >
            {__("Add Link", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Footer Company Links */}
        <PanelBody
          title={__("Footer - Company Links", "mbn-theme")}
          initialOpen={false}
        >
          {footerCompanyLinks.map((link, index) => (
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
                  const updated = [...footerCompanyLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ footerCompanyLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...footerCompanyLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ footerCompanyLinks: updated });
                }}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    footerCompanyLinks: footerCompanyLinks.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Link", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                footerCompanyLinks: [
                  ...footerCompanyLinks,
                  { label: "", url: "#" },
                ],
              })
            }
          >
            {__("Add Link", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Footer Social Links */}
        <PanelBody
          title={__("Footer - Social Links", "mbn-theme")}
          initialOpen={false}
        >
          {footerSocialLinks.map((link, index) => (
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
                  const updated = [...footerSocialLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ footerSocialLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...footerSocialLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ footerSocialLinks: updated });
                }}
              />
              <TextControl
                label={__("Icon Name", "mbn-theme")}
                value={link.icon}
                onChange={(value) => {
                  const updated = [...footerSocialLinks];
                  updated[index] = { ...updated[index], icon: value };
                  setAttributes({ footerSocialLinks: updated });
                }}
                help={__(
                  "Icon filename (e.g., facebook, instagram, x)",
                  "mbn-theme",
                )}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    footerSocialLinks: footerSocialLinks.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Link", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                footerSocialLinks: [
                  ...footerSocialLinks,
                  { label: "", url: "#", icon: "facebook" },
                ],
              })
            }
          >
            {__("Add Link", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Footer Legal Links */}
        <PanelBody
          title={__("Footer - Legal Links", "mbn-theme")}
          initialOpen={false}
        >
          {footerLegalLinks.map((link, index) => (
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
                  const updated = [...footerLegalLinks];
                  updated[index] = { ...updated[index], label: value };
                  setAttributes({ footerLegalLinks: updated });
                }}
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) => {
                  const updated = [...footerLegalLinks];
                  updated[index] = { ...updated[index], url: value };
                  setAttributes({ footerLegalLinks: updated });
                }}
              />
              <Button
                isDestructive
                onClick={() => {
                  setAttributes({
                    footerLegalLinks: footerLegalLinks.filter(
                      (_, i) => i !== index,
                    ),
                  });
                }}
              >
                {__("Remove Link", "mbn-theme")}
              </Button>
            </div>
          ))}
          <Button
            isPrimary
            onClick={() =>
              setAttributes({
                footerLegalLinks: [
                  ...footerLegalLinks,
                  { label: "", url: "#" },
                ],
              })
            }
          >
            {__("Add Link", "mbn-theme")}
          </Button>
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

          {/* CTA Section 2 */}
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
              CTA Section 2
            </p>
            <RichText
              tagName="h2"
              value={cta2Heading}
              onChange={(value) => setAttributes({ cta2Heading: value })}
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
              value={cta2Subheading}
              onChange={(value) => setAttributes({ cta2Subheading: value })}
              placeholder={__("CTA description...", "mbn-theme")}
              style={{ fontSize: "16px", margin: "0 0 10px", opacity: "0.9" }}
            />
            <RichText
              tagName="span"
              value={cta2ButtonText}
              onChange={(value) => setAttributes({ cta2ButtonText: value })}
              placeholder={__("Button...", "mbn-theme")}
              style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#000",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Footer */}
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
              Footer
            </p>
            <RichText
              tagName="p"
              value={footerNewsletterText}
              onChange={(value) =>
                setAttributes({ footerNewsletterText: value })
              }
              placeholder={__("Newsletter text...", "mbn-theme")}
              style={{ fontSize: "14px", margin: "0 0 10px", opacity: "0.9" }}
            />
            <RichText
              tagName="p"
              value={footerCopyright}
              onChange={(value) => setAttributes({ footerCopyright: value })}
              placeholder={__("Copyright text...", "mbn-theme")}
              style={{ fontSize: "14px", margin: "10px 0 0", opacity: "0.7" }}
            />
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
