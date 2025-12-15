import React, { useState } from "react";
import Dropdown, { DropdownItem } from "../../../components/Dropdown/Dropdown/Dropdown";
import Arrow from "../../../components/Icons/Arrow/Arrow";

const createDropdownItem = (label: string, childrenLabels: string[]): DropdownItem => ({
  label,
  optionsListPosition: "inside",
  Indentation: "left, 20px",
  AllowMultipleMenusOpened: false,
  RememberOpenedMenus: true,
  children: childrenLabels.map((childLabel) => ({
    label: childLabel,
    optionsListPosition: "inside",
    Indentation: "left, 40px",
    AllowMultipleMenusOpened: false,
    RememberOpenedMenus: true,
  })),
});

const dropdownData: DropdownItem[] = [
  {
    label: "InteractiveControls",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Buttons", ["primaryButton", "secondaryButton", "ghostButton", "iconButton", "fabButton"]),
      createDropdownItem("Links", ["textLink", "navigationLink", "externalLink", "anchorLink"]),
    ],
  },
  {
    label: "Inputs",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("TextInputs", ["textField", "passwordField", "emailField", "searchField", "textarea"]),
      createDropdownItem("Selectors", ["dropdown", "combobox", "selectList", "datePicker", "timePicker"]),
      createDropdownItem("UploadInputs", ["fileUpload", "imageUpload", "dragDropZone"]),
    ],
  },
  {
    label: "DisplayElements",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Text", ["heading", "subheading", "paragraph", "label", "caption"]),
      createDropdownItem("Media", ["image", "video", "audio", "icon", "svg"]),
      createDropdownItem("StatusIndicators", ["badge", "tag", "statusDot", "progressBar"]),
    ],
  },
  {
    label: "Layout",
    optionsListPosition: "inside",
    Indentation: "left, 20px",
    AllowMultipleMenusOpened: true,
    RememberOpenedMenus: true,
    children: [
      createDropdownItem("Containers", ["section", "article", "card", "panel"]),
      createDropdownItem("Structural", ["header", "footer", "sidebar", "navbar"]),
      createDropdownItem("Overlays", ["modal", "popup", "dialog", "drawer"]),
    ],
  },
];

const CustomDropdownOption: React.FC<{
  label: string;
  onClick?: () => void;
  hasChildren?: boolean;
  isOpen?: boolean;
}> = ({ label, onClick, hasChildren, isOpen }) => {
  const direction = isOpen ? "bottom" : "right";
  const leftPadding = hasChildren ? 16 : 32;

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: `8px ${leftPadding}px`,
        backgroundColor: "#fff",
        color: "#000",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {hasChildren && (
        <Arrow
          size={{ width: 12, height: 8, notch: 0, rotate: direction }}
          fillColor="black"
          strokeColor="black"
          strokeWidth={0.25}
          style={{ marginRight: "8px" }}
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
    element: <CustomDropdownOption label={item.label} hasChildren={hasChildren} />,
    children: item.children?.map(renderDropdownItem),
  };
};

const Dropdown_ComponentsCatalogue: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Set<number>>(new Set());

  const toggleDropdown = (index: number) => {
    const newSet = new Set(openDropdowns);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenDropdowns(newSet);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", backgroundColor: "#fff", padding: "16px", border: "1px solid #ddd" }}>
      {dropdownData.map((item, idx) => {
        const hasChildren = !!item.children?.length;
        return (
          <Dropdown
            key={idx}
            triggerItem={renderDropdownItem(item)}
            optionsListPosition="inside"
            OpenMenu={["click"]}
            CloseMenu={["click_option_again"]}
            DropdownOption={({ label, onClick }) => (
              <CustomDropdownOption
                label={label}
                onClick={() => {
                  onClick?.();
                  toggleDropdown(idx);
                }}
                isOpen={openDropdowns.has(idx)}
                hasChildren={hasChildren}
              />
            )}
            Indentation="left, 15px"
          />
        );
      })}
    </div>
  );
};

export default Dropdown_ComponentsCatalogue;
