import { registerBlockType } from "@mbn/editor";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@mbn/editor";
import { PanelBody, TextControl, TextareaControl, Button } from "@mbn/editor";
import { __ } from "@mbn/editor";
import { Fragment } from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  const {
    heroLabel,
    heroHeading,
    heroSubtext,
    heroButtonText,
    heroButtonUrl,
    heroBackgroundType,
    heroBackgroundVideoId,
    heroBackgroundVideoUrl,
    heroBackgroundImageId,
    heroBackgroundImageUrl,
    servicesHeadingAccent,
    servicesHeading,
    servicesSubtext,
    serviceCards,
    midCtaHeading,
    midCtaHeadingAccent,
    midCtaSubtext,
    midCtaCallButtonText,
    midCtaCallButtonUrl,
    midCtaScheduleButtonText,
    midCtaScheduleButtonUrl,
    midCtaBackgroundImageId,
    midCtaBackgroundImageUrl,
    processLabel,
    processHeading,
    processHeadingAccent,
    processSubtext,
    processSteps,
    whyHeading,
    whyHeadingAccent,
    whySubtext,
    whyCards,
    testimonialHeading,
    testimonialSubtext,
    testimonialQuote,
    testimonialName,
    testimonialRole,
    testimonialAvatarId,
    testimonialAvatarUrl,
    signsHeadingAccent,
    signsHeading,
    signsIntro,
    signsList,
    signsImageId,
    signsImageUrl,
    signsBackgroundImageId,
    signsBackgroundImageUrl,
    faqHeading,
    faqItems,
    bottomCtaHeading,
    bottomCtaSubtext,
    bottomCtaCallButtonText,
    bottomCtaCallButtonUrl,
    bottomCtaScheduleButtonText,
    bottomCtaScheduleButtonUrl,
    footerTagline,
    footerNewsletterLabel,
    footerServicesLinks,
    footerCompanyLinks,
    footerSocialLinks,
    footerCopyright,
    footerPrivacyUrl,
    footerTermsUrl,
  } = attributes;

  const blockProps = useBlockProps();

  // Helper functions for array attributes
  const updateServiceCard = (index, updates) => {
    const updatedCards = [...serviceCards];
    updatedCards[index] = { ...updatedCards[index], ...updates };
    setAttributes({ serviceCards: updatedCards });
  };

  const addServiceCard = () => {
    setAttributes({
      serviceCards: [
        ...serviceCards,
        { tag: "", heading: "", text: "", imageId: 0, imageUrl: "" },
      ],
    });
  };

  const removeServiceCard = (index) => {
    const updatedCards = serviceCards.filter((_, i) => i !== index);
    setAttributes({ serviceCards: updatedCards });
  };

  const updateProcessStep = (index, updates) => {
    const updatedSteps = [...processSteps];
    updatedSteps[index] = { ...updatedSteps[index], ...updates };
    setAttributes({ processSteps: updatedSteps });
  };

  const addProcessStep = () => {
    setAttributes({
      processSteps: [
        ...processSteps,
        { heading: "", text: "", iconId: 0, iconUrl: "" },
      ],
    });
  };

  const removeProcessStep = (index) => {
    const updatedSteps = processSteps.filter((_, i) => i !== index);
    setAttributes({ processSteps: updatedSteps });
  };

  const updateWhyCard = (index, updates) => {
    const updatedCards = [...whyCards];
    updatedCards[index] = { ...updatedCards[index], ...updates };
    setAttributes({ whyCards: updatedCards });
  };

  const addWhyCard = () => {
    setAttributes({
      whyCards: [
        ...whyCards,
        { heading: "", text: "", imageId: 0, imageUrl: "" },
      ],
    });
  };

  const removeWhyCard = (index) => {
    const updatedCards = whyCards.filter((_, i) => i !== index);
    setAttributes({ whyCards: updatedCards });
  };

  const updateSignItem = (index, value) => {
    const updatedList = [...signsList];
    updatedList[index] = value;
    setAttributes({ signsList: updatedList });
  };

  const addSignItem = () => {
    setAttributes({ signsList: [...signsList, ""] });
  };

  const removeSignItem = (index) => {
    const updatedList = signsList.filter((_, i) => i !== index);
    setAttributes({ signsList: updatedList });
  };

  const updateFaqItem = (index, updates) => {
    const updatedItems = [...faqItems];
    updatedItems[index] = { ...updatedItems[index], ...updates };
    setAttributes({ faqItems: updatedItems });
  };

  const addFaqItem = () => {
    setAttributes({
      faqItems: [...faqItems, { question: "", answer: "" }],
    });
  };

  const removeFaqItem = (index) => {
    const updatedItems = faqItems.filter((_, i) => i !== index);
    setAttributes({ faqItems: updatedItems });
  };

  const updateFooterLink = (type, index, updates) => {
    let updatedLinks;
    if (type === "services") {
      updatedLinks = [...footerServicesLinks];
      updatedLinks[index] = { ...updatedLinks[index], ...updates };
      setAttributes({ footerServicesLinks: updatedLinks });
    } else if (type === "company") {
      updatedLinks = [...footerCompanyLinks];
      updatedLinks[index] = { ...updatedLinks[index], ...updates };
      setAttributes({ footerCompanyLinks: updatedLinks });
    } else if (type === "social") {
      updatedLinks = [...footerSocialLinks];
      updatedLinks[index] = { ...updatedLinks[index], ...updates };
      setAttributes({ footerSocialLinks: updatedLinks });
    }
  };

  return (
    <Fragment>
      <InspectorControls>
        {/* Hero Section */}
        <PanelBody title={__("Hero Section", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Label", "mbn-theme")}
            value={heroLabel}
            onChange={(value) => setAttributes({ heroLabel: value })}
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={heroHeading}
            onChange={(value) => setAttributes({ heroHeading: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={heroSubtext}
            onChange={(value) => setAttributes({ heroSubtext: value })}
            rows={4}
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
                  <div style={{ marginTop: "10px" }}>
                    {heroBackgroundVideoUrl && (
                      <video
                        src={heroBackgroundVideoUrl}
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                        controls
                      />
                    )}
                    <Button onClick={open} variant="secondary">
                      {heroBackgroundVideoId
                        ? __("Replace Background Video", "mbn-theme")
                        : __("Upload Background Video", "mbn-theme")}
                    </Button>
                    {heroBackgroundVideoId > 0 && (
                      <Button
                        variant="link"
                        isDestructive
                        onClick={() =>
                          setAttributes({
                            heroBackgroundVideoId: 0,
                            heroBackgroundVideoUrl: "",
                          })
                        }
                        style={{ marginTop: "10px", display: "block" }}
                      >
                        {__("Remove Video", "mbn-theme")}
                      </Button>
                    )}
                  </div>
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
                  <div style={{ marginTop: "10px" }}>
                    {heroBackgroundImageUrl && (
                      <img
                        src={heroBackgroundImageUrl}
                        alt=""
                        style={{ maxWidth: "100%", marginBottom: "10px" }}
                      />
                    )}
                    <Button onClick={open} variant="secondary">
                      {heroBackgroundImageUrl
                        ? __("Replace Background Image", "mbn-theme")
                        : __("Select Background Image", "mbn-theme")}
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
                        style={{ marginTop: "10px", display: "block" }}
                      >
                        {__("Remove Image", "mbn-theme")}
                      </Button>
                    )}
                  </div>
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
            label={__("Heading Accent", "mbn-theme")}
            value={servicesHeadingAccent}
            onChange={(value) =>
              setAttributes({ servicesHeadingAccent: value })
            }
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={servicesHeading}
            onChange={(value) => setAttributes({ servicesHeading: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={servicesSubtext}
            onChange={(value) => setAttributes({ servicesSubtext: value })}
            rows={4}
          />
          <h3>{__("Service Cards", "mbn-theme")}</h3>
          {serviceCards.map((card, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>
                  {__("Card", "mbn-theme")} {index + 1}
                </strong>
                <Button
                  icon="trash"
                  label={__("Remove", "mbn-theme")}
                  onClick={() => removeServiceCard(index)}
                  isDestructive
                  isSmall
                />
              </div>
              <TextControl
                label={__("Tag", "mbn-theme")}
                value={card.tag}
                onChange={(value) => updateServiceCard(index, { tag: value })}
              />
              <TextControl
                label={__("Heading", "mbn-theme")}
                value={card.heading}
                onChange={(value) =>
                  updateServiceCard(index, { heading: value })
                }
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={card.text}
                onChange={(value) => updateServiceCard(index, { text: value })}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateServiceCard(index, {
                      imageId: media.id,
                      imageUrl: media.url,
                    })
                  }
                  allowedTypes={["image"]}
                  value={card.imageId}
                  render={({ open }) => (
                    <div style={{ marginTop: "10px" }}>
                      <Button onClick={open} variant="secondary">
                        {card.imageUrl
                          ? __("Replace Image", "mbn-theme")
                          : __("Select Image", "mbn-theme")}
                      </Button>
                      {card.imageUrl && (
                        <img
                          src={card.imageUrl}
                          alt=""
                          style={{
                            marginTop: "10px",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      )}
                    </div>
                  )}
                />
              </MediaUploadCheck>
            </div>
          ))}
          <Button variant="primary" onClick={addServiceCard}>
            {__("+ Add Service Card", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Mid CTA Section */}
        <PanelBody
          title={__("Mid CTA Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={midCtaHeading}
            onChange={(value) => setAttributes({ midCtaHeading: value })}
          />
          <TextControl
            label={__("Heading Accent", "mbn-theme")}
            value={midCtaHeadingAccent}
            onChange={(value) => setAttributes({ midCtaHeadingAccent: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={midCtaSubtext}
            onChange={(value) => setAttributes({ midCtaSubtext: value })}
            rows={3}
          />
          <TextControl
            label={__("Call Button Text", "mbn-theme")}
            value={midCtaCallButtonText}
            onChange={(value) => setAttributes({ midCtaCallButtonText: value })}
          />
          <TextControl
            label={__("Call Button URL", "mbn-theme")}
            value={midCtaCallButtonUrl}
            onChange={(value) => setAttributes({ midCtaCallButtonUrl: value })}
          />
          <TextControl
            label={__("Schedule Button Text", "mbn-theme")}
            value={midCtaScheduleButtonText}
            onChange={(value) =>
              setAttributes({ midCtaScheduleButtonText: value })
            }
          />
          <TextControl
            label={__("Schedule Button URL", "mbn-theme")}
            value={midCtaScheduleButtonUrl}
            onChange={(value) =>
              setAttributes({ midCtaScheduleButtonUrl: value })
            }
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  midCtaBackgroundImageId: media.id,
                  midCtaBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={midCtaBackgroundImageId}
              render={({ open }) => (
                <div style={{ marginTop: "10px" }}>
                  <Button onClick={open} variant="secondary">
                    {midCtaBackgroundImageUrl
                      ? __("Replace Background", "mbn-theme")
                      : __("Select Background", "mbn-theme")}
                  </Button>
                </div>
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
            label={__("Label", "mbn-theme")}
            value={processLabel}
            onChange={(value) => setAttributes({ processLabel: value })}
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={processHeading}
            onChange={(value) => setAttributes({ processHeading: value })}
          />
          <TextControl
            label={__("Heading Accent", "mbn-theme")}
            value={processHeadingAccent}
            onChange={(value) => setAttributes({ processHeadingAccent: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={processSubtext}
            onChange={(value) => setAttributes({ processSubtext: value })}
            rows={3}
          />
          <h3>{__("Process Steps", "mbn-theme")}</h3>
          {processSteps.map((step, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>
                  {__("Step", "mbn-theme")} {index + 1}
                </strong>
                <Button
                  icon="trash"
                  label={__("Remove", "mbn-theme")}
                  onClick={() => removeProcessStep(index)}
                  isDestructive
                  isSmall
                />
              </div>
              <TextControl
                label={__("Heading", "mbn-theme")}
                value={step.heading}
                onChange={(value) =>
                  updateProcessStep(index, { heading: value })
                }
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={step.text}
                onChange={(value) => updateProcessStep(index, { text: value })}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateProcessStep(index, {
                      iconId: media.id,
                      iconUrl: media.url,
                    })
                  }
                  allowedTypes={["image"]}
                  value={step.iconId}
                  render={({ open }) => (
                    <Button onClick={open} variant="secondary">
                      {step.iconUrl
                        ? __("Replace Icon", "mbn-theme")
                        : __("Select Icon", "mbn-theme")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          ))}
          <Button variant="primary" onClick={addProcessStep}>
            {__("+ Add Process Step", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Why Choose Section */}
        <PanelBody
          title={__("Why Choose Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={whyHeading}
            onChange={(value) => setAttributes({ whyHeading: value })}
          />
          <TextControl
            label={__("Heading Accent", "mbn-theme")}
            value={whyHeadingAccent}
            onChange={(value) => setAttributes({ whyHeadingAccent: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={whySubtext}
            onChange={(value) => setAttributes({ whySubtext: value })}
            rows={3}
          />
          <h3>{__("Why Cards", "mbn-theme")}</h3>
          {whyCards.map((card, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>
                  {__("Card", "mbn-theme")} {index + 1}
                </strong>
                <Button
                  icon="trash"
                  label={__("Remove", "mbn-theme")}
                  onClick={() => removeWhyCard(index)}
                  isDestructive
                  isSmall
                />
              </div>
              <TextControl
                label={__("Heading", "mbn-theme")}
                value={card.heading}
                onChange={(value) => updateWhyCard(index, { heading: value })}
              />
              <TextareaControl
                label={__("Text", "mbn-theme")}
                value={card.text}
                onChange={(value) => updateWhyCard(index, { text: value })}
                rows={3}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateWhyCard(index, {
                      imageId: media.id,
                      imageUrl: media.url,
                    })
                  }
                  allowedTypes={["image"]}
                  value={card.imageId}
                  render={({ open }) => (
                    <Button onClick={open} variant="secondary">
                      {card.imageUrl
                        ? __("Replace Image", "mbn-theme")
                        : __("Select Image", "mbn-theme")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          ))}
          <Button variant="primary" onClick={addWhyCard}>
            {__("+ Add Why Card", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Testimonial Section */}
        <PanelBody
          title={__("Testimonial Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={testimonialHeading}
            onChange={(value) => setAttributes({ testimonialHeading: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={testimonialSubtext}
            onChange={(value) => setAttributes({ testimonialSubtext: value })}
            rows={2}
          />
          <TextareaControl
            label={__("Quote", "mbn-theme")}
            value={testimonialQuote}
            onChange={(value) => setAttributes({ testimonialQuote: value })}
            rows={4}
          />
          <TextControl
            label={__("Name", "mbn-theme")}
            value={testimonialName}
            onChange={(value) => setAttributes({ testimonialName: value })}
          />
          <TextControl
            label={__("Role", "mbn-theme")}
            value={testimonialRole}
            onChange={(value) => setAttributes({ testimonialRole: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  testimonialAvatarId: media.id,
                  testimonialAvatarUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={testimonialAvatarId}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {testimonialAvatarUrl
                    ? __("Replace Avatar", "mbn-theme")
                    : __("Select Avatar", "mbn-theme")}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* 5 Signs Section */}
        <PanelBody
          title={__("5 Signs Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading Accent", "mbn-theme")}
            value={signsHeadingAccent}
            onChange={(value) => setAttributes({ signsHeadingAccent: value })}
          />
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={signsHeading}
            onChange={(value) => setAttributes({ signsHeading: value })}
          />
          <TextareaControl
            label={__("Intro", "mbn-theme")}
            value={signsIntro}
            onChange={(value) => setAttributes({ signsIntro: value })}
            rows={3}
          />
          <h3>{__("Signs List", "mbn-theme")}</h3>
          {signsList.map((sign, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
            >
              <TextControl
                value={sign}
                onChange={(value) => updateSignItem(index, value)}
                style={{ flex: 1 }}
              />
              <Button
                icon="trash"
                label={__("Remove", "mbn-theme")}
                onClick={() => removeSignItem(index)}
                isDestructive
                isSmall
              />
            </div>
          ))}
          <Button variant="primary" onClick={addSignItem}>
            {__("+ Add Sign", "mbn-theme")}
          </Button>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  signsImageId: media.id,
                  signsImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={signsImageId}
              render={({ open }) => (
                <div style={{ marginTop: "15px" }}>
                  <Button onClick={open} variant="secondary">
                    {signsImageUrl
                      ? __("Replace RZR Image", "mbn-theme")
                      : __("Select RZR Image", "mbn-theme")}
                  </Button>
                </div>
              )}
            />
          </MediaUploadCheck>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  signsBackgroundImageId: media.id,
                  signsBackgroundImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={signsBackgroundImageId}
              render={({ open }) => (
                <div style={{ marginTop: "15px" }}>
                  <Button onClick={open} variant="secondary">
                    {signsBackgroundImageUrl
                      ? __("Replace Background", "mbn-theme")
                      : __("Select Background", "mbn-theme")}
                  </Button>
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        {/* FAQ Section */}
        <PanelBody title={__("FAQ Section", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={faqHeading}
            onChange={(value) => setAttributes({ faqHeading: value })}
          />
          <h3>{__("FAQ Items", "mbn-theme")}</h3>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>
                  {__("FAQ", "mbn-theme")} {index + 1}
                </strong>
                <Button
                  icon="trash"
                  label={__("Remove", "mbn-theme")}
                  onClick={() => removeFaqItem(index)}
                  isDestructive
                  isSmall
                />
              </div>
              <TextControl
                label={__("Question", "mbn-theme")}
                value={item.question}
                onChange={(value) => updateFaqItem(index, { question: value })}
              />
              <TextareaControl
                label={__("Answer", "mbn-theme")}
                value={item.answer}
                onChange={(value) => updateFaqItem(index, { answer: value })}
                rows={4}
              />
            </div>
          ))}
          <Button variant="primary" onClick={addFaqItem}>
            {__("+ Add FAQ", "mbn-theme")}
          </Button>
        </PanelBody>

        {/* Bottom CTA Section */}
        <PanelBody
          title={__("Bottom CTA Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Heading", "mbn-theme")}
            value={bottomCtaHeading}
            onChange={(value) => setAttributes({ bottomCtaHeading: value })}
          />
          <TextareaControl
            label={__("Subtext", "mbn-theme")}
            value={bottomCtaSubtext}
            onChange={(value) => setAttributes({ bottomCtaSubtext: value })}
            rows={2}
          />
          <TextControl
            label={__("Call Button Text", "mbn-theme")}
            value={bottomCtaCallButtonText}
            onChange={(value) =>
              setAttributes({ bottomCtaCallButtonText: value })
            }
          />
          <TextControl
            label={__("Call Button URL", "mbn-theme")}
            value={bottomCtaCallButtonUrl}
            onChange={(value) =>
              setAttributes({ bottomCtaCallButtonUrl: value })
            }
          />
          <TextControl
            label={__("Schedule Button Text", "mbn-theme")}
            value={bottomCtaScheduleButtonText}
            onChange={(value) =>
              setAttributes({ bottomCtaScheduleButtonText: value })
            }
          />
          <TextControl
            label={__("Schedule Button URL", "mbn-theme")}
            value={bottomCtaScheduleButtonUrl}
            onChange={(value) =>
              setAttributes({ bottomCtaScheduleButtonUrl: value })
            }
          />
        </PanelBody>

        {/* Footer Section */}
        <PanelBody
          title={__("Footer Section", "mbn-theme")}
          initialOpen={false}
        >
          <TextControl
            label={__("Tagline", "mbn-theme")}
            value={footerTagline}
            onChange={(value) => setAttributes({ footerTagline: value })}
          />
          <TextControl
            label={__("Newsletter Label", "mbn-theme")}
            value={footerNewsletterLabel}
            onChange={(value) =>
              setAttributes({ footerNewsletterLabel: value })
            }
          />
          <TextControl
            label={__("Copyright", "mbn-theme")}
            value={footerCopyright}
            onChange={(value) => setAttributes({ footerCopyright: value })}
          />
          <TextControl
            label={__("Privacy Policy URL", "mbn-theme")}
            value={footerPrivacyUrl}
            onChange={(value) => setAttributes({ footerPrivacyUrl: value })}
          />
          <TextControl
            label={__("Terms of Service URL", "mbn-theme")}
            value={footerTermsUrl}
            onChange={(value) => setAttributes({ footerTermsUrl: value })}
          />
          <h3>{__("Services Links", "mbn-theme")}</h3>
          {footerServicesLinks.map((link, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <TextControl
                label={__("Label", "mbn-theme")}
                value={link.label}
                onChange={(value) =>
                  updateFooterLink("services", index, { label: value })
                }
              />
              <TextControl
                label={__("URL", "mbn-theme")}
                value={link.url}
                onChange={(value) =>
                  updateFooterLink("services", index, { url: value })
                }
              />
            </div>
          ))}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <h3>Services Page Block</h3>
          <p>
            Complete services page with all sections configured in the sidebar.
          </p>
          <ul
            style={{ listStyle: "disc", marginLeft: "20px", marginTop: "10px" }}
          >
            <li>Hero Section</li>
            <li>Services Grid ({serviceCards.length} cards)</li>
            <li>Mid CTA</li>
            <li>Process ({processSteps.length} steps)</li>
            <li>Why Choose ({whyCards.length} cards)</li>
            <li>Testimonial</li>
            <li>5 Signs ({signsList.length} items)</li>
            <li>FAQ ({faqItems.length} items)</li>
            <li>Bottom CTA</li>
            <li>Footer</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null,
});
