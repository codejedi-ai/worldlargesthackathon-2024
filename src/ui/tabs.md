import React from "react";
import {
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  Tab as ChakraTab,
  TabPanels as ChakraTabPanels,
  TabPanel as ChakraTabPanel,
  TabsProps as ChakraTabsProps,
  TabListProps,
  TabProps,
  TabPanelsProps,
  TabPanelProps,
} from "@chakra-ui/react";

export const Tabs = React.forwardRef<HTMLDivElement, ChakraTabsProps>(
  (props, ref) => {
    return <ChakraTabs ref={ref} {...props} />;
  }
);
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<HTMLDivElement, TabListProps>(
  (props, ref) => {
    return <ChakraTabList ref={ref} {...props} />;
  }
);
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabProps>(
  (props, ref) => {
    return <ChakraTab ref={ref} {...props} />;
  }
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    return <ChakraTabPanel ref={ref} {...props} />;
  }
);
TabsContent.displayName = "TabsContent";

export { ChakraTabPanels as TabsPanel };
