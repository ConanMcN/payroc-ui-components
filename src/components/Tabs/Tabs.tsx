import { Fragment, ReactNode } from "react";
import { Tab } from "@headlessui/react";

type TabsProps = {
  tabs: {
    title: string;
    content: ReactNode | undefined;
    disabled?: boolean;
  }[];
};

const TabVariant = {
  default:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium hover:text-[#191C26] hover:border-[#BBBBBB] cursor-pointer text-[#636363] border-[#E5E5E5]",
  disabled:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium cursor-not-allowed text-[#636363] border-[#E5E5E5] opacity-50",
  selected:
    "font-rocgrotesk px-4 py-2 border-b-4 font-medium hover:text-[#191C26] hover:border-primary cursor-pointer text-[#636363] border-primary",
};

export const Tabs = ({ tabs, ...props }: TabsProps) => {
  return (
    <Tab.Group defaultIndex={0}>
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
        {tabs.map(({ content }) => (
          <Tab.Panel className="px-4">{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
