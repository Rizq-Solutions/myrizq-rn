import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabBarIcon } from "components";
import { t } from "utils";
import { Colors } from "style";

import ActNavigator from "./BottomTab/ActNavigator";
import BudgetNavigator from "./BottomTab/BudgetNavigator";
import EmissionsNavigator from "./BottomTab/EmissionsNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";
import AddEmissionNavigator from "./BottomTab/AddEmissionNavigator";

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-home"} />,
};

const EmissionsOptions = {
  tabBarLabel: t("EMISSIONS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-calculator"} />,
};

const ActOptions = {
  tabBarLabel: t("ACT_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand-left-sharp"} />,
};

const SettingsOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-options"} />,
};

const AddEmissionOptions = {
  tabBarLabel: t("ADD_EMISSION_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-add-circle"} />,
};

const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomTab.Navigator
      initialRouteName={"EmissionsNavigator"}
      tabBarOptions={{
        activeTintColor: Colors.green50,
        inactiveTintColor: Colors.grey40,
        style: {
          backgroundColor: Colors.white,
          borderTopWidth: 2,
          borderTopColor: Colors.green10,
          paddingBottom: bottom / 2 + 6,
        },
      }}
    >
      <BottomTab.Screen
        name="BudgetNavigator"
        options={BudgetOptions}
        component={BudgetNavigator}
      />
      <BottomTab.Screen
        name="EmissionsNavigator"
        options={EmissionsOptions}
        component={EmissionsNavigator}
      />
      <BottomTab.Screen
        name="AddEmissionNavigator"
        options={AddEmissionOptions}
        component={AddEmissionNavigator}
      />
      <BottomTab.Screen name="Act" options={ActOptions} component={ActNavigator} />
      <BottomTab.Screen
        name="SettingsNavigator"
        options={SettingsOptions}
        component={SettingsNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
