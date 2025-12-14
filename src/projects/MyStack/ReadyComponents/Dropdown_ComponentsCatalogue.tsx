import React, { useState } from "react";
import Dropdown, { DropdownItem } from "../../../components/Dropdown/Dropdown/Dropdown";
import Arrow from "../../../components/Icons/Arrow/Arrow";

const createDropdownItem = (label: string, childrenLabels: string[]): DropdownItem => ({
  label,
  optionsListPosition: "inside",
  Indentation: "left, 20px",
  AllowMultipleMenusOpened: false,
  RememberOpenedMenus: true,
  children: childrenLabels.map(childLabel => ({
    label: childLabel,
    optionsListPosition: "inside",
    Indentation: "left, 40px",
    AllowMultipleMenusOpened: false,
    RememberOpenedMenus: true
  }))
});

const dropdownData: DropdownItem[] = [
  {
    label: "InteractiveControls",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Buttons", [
        "primaryButton",
        "secondaryButton",
        "ghostButton",
        "iconButton",
        "fabButton"
      ]),
      createDropdownItem("Links", [
        "textLink",
        "navigationLink",
        "externalLink",
        "anchorLink"
      ])
    ]
  },
  {
    label: "Inputs",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("TextInputs", [
        "textField",
        "passwordField",
        "emailField",
        "searchField",
        "textarea"
      ]),
      createDropdownItem("Selectors", [
        "dropdown",
        "combobox",
        "selectList",
        "datePicker",
        "timePicker"
      ]),
      createDropdownItem("UploadInputs", [
        "fileUpload",
        "imageUpload",
        "dragDropZone"
      ])
    ]
  },
  {
    label: "DisplayElements",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Text", [
        "heading",
        "subheading",
        "paragraph",
        "label",
        "caption"
      ]),
      createDropdownItem("Media", [
        "image",
        "video",
        "audio",
        "icon",
        "svg"
      ]),
      createDropdownItem("StatusIndicators", [
        "badge",
        "tag",
        "statusDot",
        "progressBar"
      ])
    ]
  },
  {
    label: "Layout",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Containers", [
        "section",
        "article",
        "card",
        "panel"
      ]),
      createDropdownItem("Structural", [
        "header",
        "footer",
        "sidebar",
        "navbar"
      ]),
      createDropdownItem("Overlays", [
        "modal",
        "popup",
        "dialog",
        "drawer"
      ])
    ]
  }
];

const CustomDropdownOption: React.FC<{
  label: string;
  onClick?: () => void;
  active?: boolean;
  hasChildren?: boolean;
  indentation?: string;
}> = ({ label, onClick, active, hasChildren, indentation }) => {
  const [hovered, setHovered] = useState(false);
  const direction = active || hovered ? "bottom" : "right";
  const leftPadding = hasChildren ? 16 : 32;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: `8px ${leftPadding}px`,
        backgroundColor: hovered ? "#f5f5f5" : "#fff",
        color: "#000",
        cursor: "pointer",
        userSelect: "none",
        transition: "background-color 0.2s"
      }}
    >
      {hasChildren && (
        <Arrow
          size={{ width: 12, height: 8, notch: 0, rotate: direction }}
          style={{ fill: "black", stroke: "black", marginRight: "8px", transition: "transform 0.2s ease" }}
          hover={{ rotate: direction, transition: 0.1 }}
          isParentHovered={active || hovered}
        />
      )}
      <span>{label}</span>
    </div>
  );
};

const renderDropdownItem = (item: DropdownItem) => {
  const hasChildren = !!item.children?.length;
  return {
    ...item,
    element: (
      <CustomDropdownOption
        label={item.label}
        hasChildren={hasChildren}
      />
    ),
    children: item.children?.map(renderDropdownItem)
  };
};

const Dropdown_ComponentsCatalogue: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px", backgroundColor: "#fff", padding: "16px", border: "1px solid #ddd" }}>
    {dropdownData.map((item, idx) => (
      <Dropdown
        key={idx}
        triggerItem={renderDropdownItem(item)}
        optionsListPosition="inside"
        OpenMenu={["click"]}
        CloseMenu={["click_option_again"]}
        DropdownOption={({ label, onClick, active }) => (
          <CustomDropdownOption
            label={label}
            onClick={onClick}
            active={active}
            hasChildren={!!item.children?.length}
          />
        )}
        Indentation="left, 15px"
      />
    ))}
  </div>
);

export default Dropdown_ComponentsCatalogue;
