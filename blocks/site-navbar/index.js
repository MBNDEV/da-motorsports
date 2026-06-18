import {
  registerBlockType,
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  ToggleControl,
  useSelect,
  __,
} from "@mbn/editor";
import metadata from "./block.json";

function Edit({ attributes, setAttributes }) {
  // Fetch available WordPress menus
  const menus = useSelect((select) => {
    const menuItems = select("core").getMenus();
    return menuItems || [];
  }, []);
  const {
    logoImageId,
    logoImageUrl,
    logoAlt,
    logoLinkUrl,
    useWordPressMenu,
    menuId,
    navLinks,
    dropdownIconId,
    dropdownIconUrl,
    partnerLogoImageId,
    partnerLogoImageUrl,
    partnerLogoAlt,
    ctaButtonText,
    ctaButtonUrl,
  } = attributes;

  const blockProps = useBlockProps({
    className: "mbn-site-navbar-block",
  });

  return (
    <>
      <InspectorControls>
        {/* Logo Settings */}
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
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
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
          <TextControl
            label={__("Logo Alt Text", "mbn-theme")}
            value={logoAlt}
            onChange={(value) => setAttributes({ logoAlt: value })}
          />
          <TextControl
            label={__("Logo Link URL", "mbn-theme")}
            value={logoLinkUrl}
            onChange={(value) => setAttributes({ logoLinkUrl: value })}
          />
        </PanelBody>

        {/* Navigation Links */}
        <PanelBody
          title={__("Navigation Links", "mbn-theme")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Use WordPress Menu", "mbn-theme")}
            checked={useWordPressMenu}
            onChange={(value) => setAttributes({ useWordPressMenu: value })}
            help={
              useWordPressMenu
                ? __("Using WordPress menu", "mbn-theme")
                : __("Using custom navigation links", "mbn-theme")
            }
          />
          {useWordPressMenu && (
            <SelectControl
              label={__("Select Menu", "mbn-theme")}
              value={menuId}
              options={[
                { label: __("— Select a menu —", "mbn-theme"), value: 0 },
                ...menus.map((menu) => ({
                  label: menu.name,
                  value: menu.id,
                })),
              ]}
              onChange={(value) =>
                setAttributes({ menuId: parseInt(value) || 0 })
              }
              help={
                menus.length === 0
                  ? __(
                      "No menus found. Create a menu in Appearance → Menus.",
                      "mbn-theme",
                    )
                  : __("Select a WordPress menu to display", "mbn-theme")
              }
            />
          )}
          {!useWordPressMenu && (
            <>
              {navLinks.map((link, index) => (
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
                      const updated = [...navLinks];
                      updated[index] = { ...updated[index], label: value };
                      setAttributes({ navLinks: updated });
                    }}
                  />
                  <TextControl
                    label={__("URL", "mbn-theme")}
                    value={link.url}
                    onChange={(value) => {
                      const updated = [...navLinks];
                      updated[index] = { ...updated[index], url: value };
                      setAttributes({ navLinks: updated });
                    }}
                  />
                  <ToggleControl
                    label={__("Has Dropdown", "mbn-theme")}
                    checked={link.hasDropdown}
                    onChange={(value) => {
                      const updated = [...navLinks];
                      updated[index] = {
                        ...updated[index],
                        hasDropdown: value,
                      };
                      setAttributes({ navLinks: updated });
                    }}
                  />
                  <Button
                    isDestructive
                    onClick={() => {
                      setAttributes({
                        navLinks: navLinks.filter((_, i) => i !== index),
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
                    navLinks: [
                      ...navLinks,
                      { label: "", url: "#", hasDropdown: false },
                    ],
                  })
                }
              >
                {__("Add Link", "mbn-theme")}
              </Button>
            </>
          )}
        </PanelBody>

        {/* Dropdown Icon */}
        <PanelBody title={__("Dropdown Icon", "mbn-theme")} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  dropdownIconId: media.id,
                  dropdownIconUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={dropdownIconId}
              render={({ open }) => (
                <>
                  {dropdownIconUrl && (
                    <img
                      src={dropdownIconUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {dropdownIconId
                      ? __("Replace Icon", "mbn-theme")
                      : __("Upload Icon", "mbn-theme")}
                  </Button>
                  {dropdownIconId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          dropdownIconId: 0,
                          dropdownIconUrl: "",
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

        {/* Partner Logo */}
        <PanelBody title={__("Partner Logo", "mbn-theme")} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  partnerLogoImageId: media.id,
                  partnerLogoImageUrl: media.url,
                })
              }
              allowedTypes={["image"]}
              value={partnerLogoImageId}
              render={({ open }) => (
                <>
                  {partnerLogoImageUrl && (
                    <img
                      src={partnerLogoImageUrl}
                      alt=""
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {partnerLogoImageId
                      ? __("Replace Partner Logo", "mbn-theme")
                      : __("Upload Partner Logo", "mbn-theme")}
                  </Button>
                  {partnerLogoImageId > 0 && (
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() =>
                        setAttributes({
                          partnerLogoImageId: 0,
                          partnerLogoImageUrl: "",
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
            label={__("Partner Logo Alt Text", "mbn-theme")}
            value={partnerLogoAlt}
            onChange={(value) => setAttributes({ partnerLogoAlt: value })}
          />
        </PanelBody>

        {/* CTA Button */}
        <PanelBody title={__("CTA Button", "mbn-theme")} initialOpen={false}>
          <TextControl
            label={__("Button Text", "mbn-theme")}
            value={ctaButtonText}
            onChange={(value) => setAttributes({ ctaButtonText: value })}
          />
          <TextControl
            label={__("Button URL", "mbn-theme")}
            value={ctaButtonUrl}
            onChange={(value) => setAttributes({ ctaButtonUrl: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "20px",
            background: "#000",
            color: "#fff",
            border: "1px solid #ddd",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>{__("Logo:", "mbn-theme")}</strong>{" "}
              {logoImageUrl ? (
                <img
                  src={logoImageUrl}
                  alt=""
                  style={{ height: "40px", display: "inline-block" }}
                />
              ) : (
                <span style={{ color: "#999" }}>
                  {__("No logo uploaded", "mbn-theme")}
                </span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <strong>{__("Nav Links:", "mbn-theme")}</strong>{" "}
              {navLinks.map((link, i) => (
                <span key={i} style={{ marginRight: "10px" }}>
                  {link.label}
                  {link.hasDropdown && " ▼"}
                </span>
              ))}
            </div>
            <div>
              <strong>{__("CTA:", "mbn-theme")}</strong> {ctaButtonText}
            </div>
          </div>
          <div style={{ marginTop: "10px", fontSize: "12px", color: "#999" }}>
            {__("Configure all navbar settings in the sidebar →", "mbn-theme")}
          </div>
        </div>
      </div>
    </>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null,
});
