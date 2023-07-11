import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

interface TabProps {
  tabs: string[];
  children: React.ReactElement;
}

export default function CTabs({
  tabs,
  children,
}: TabProps): React.ReactElement {
  return (
    <Tabs variant="enclosed">
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={tab} borderTopLeftRadius={index === 0 ? "none" : "8px"}>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>{children}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
