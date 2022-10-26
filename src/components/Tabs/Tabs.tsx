import { Fragment, ReactNode } from "react";
import { Tab } from "@headlessui/react";

type TabsProps = {
  /** Change the default index for the Tabs to start with */
  defaultIndex?: number;
  /** An array of tabs must be supplied */
  tabs: {
    title: string;
    content: ReactNode | undefined;
    disabled?: boolean;
  }[];
};

const TabVariant = {
  default:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium hover:text-[#191C26] hover:border-[#BBBBBB] cursor-pointer text-[#636363] border-[#E5E5E5] focus:shadow-button outline-0",
  disabled:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium cursor-not-allowed text-[#636363] border-[#E5E5E5] opacity-50",
  selected:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium cursor-pointer text-[#191C26] border-primary focus:shadow-button outline-0",
};

export const Tabs = ({ tabs, defaultIndex = 0 }: TabsProps) => {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List className="flex pl-0 pb-8 whitespace-nowrap overflow-auto">
        {tabs.map(({ disabled, title }) => (
          <Tab as={Fragment} key={title}>
            {({ selected }) => (
              <div
                aria-disabled={disabled}
                className={
                  TabVariant[
                    disabled ? "disabled" : selected ? "selected" : "default"
                  ]
                }
              >
                {title}
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels>
        {tabs.map(({ content }, index) => (
          <Tab.Panel className="px-4" key={`tab-${index}`}>
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
