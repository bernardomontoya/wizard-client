import { Wizard } from "@bernardomontoya/wizard-library";
import {
  WizardConfig,
  WizardContext,
  WizardStyles,
} from "@bernardomontoya/wizard-library/dist/typings/types/shared";
import { useNavigate } from "react-router-dom";
import CarIcon from "../components/icons/CarIcon";
import DashboardIcon from "../components/icons/DashboardIcon";
import HeartIcon from "../components/icons/HeartIcon";

function WizardPage() {
  const navigate = useNavigate();

  const colors = {
    white: "#FFFFFF",
    primaryColor: "#0072CE",
    grayDark: "#595959",
    grayVeryDark: "#404040",
    gray: "#f9fafb",
    grayLight: "#d1d5db",
  };

  const wizardDarkMode: WizardStyles = {
    background: {
      main: "#1f2937",
      wizard: "#2b394e",
    },
    primary_button: {
      background: colors.primaryColor,
      background_hover: "#1e40af",
      text: colors.white,
    },
    secondary_button: {
      background: colors.white,
      background_hover: "#f3f4f6",
      text: colors.grayVeryDark,
      border: colors.primaryColor,
    },
    disabled_button: {
      background: "#9ca3af",
      background_hover: "#4b5563",
      text: colors.white,
    },
    text: {
      title: colors.white,
      paragraph: "#e5e7eb",
    },
    steps_tracker: {
      label: colors.white,
      activeTab: colors.primaryColor,
      inactiveTab: "#717171",
    },
    field: {
      background: colors.gray,
      border: colors.grayLight,
      text: colors.grayVeryDark,
      label: "#e5e7eb",
    },
  };

  const wizardConfiguration: WizardConfig = {
    initialStep: "iddle",
    steps: {
      iddle: {
        actions: { START: "secondStep" },
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        cards: [
          { label: "Sed ut perspiciatis unde omnis", icon: CarIcon },
          {
            label: "Sit voluptatem accusantium doloremque",
            icon: DashboardIcon,
          },
          { label: "Neque porro quisquam est, qui dolorem", icon: HeartIcon },
        ],
        route: "/wizard/onboarding",
      },
      secondStep: {
        actions: {
          BACK: "iddle",
          NEXT: "thirdStep",
        },
        title: "General Information",
        description:
          "We use this information to calculate fuel costs and applicable incentives",
        fields: [
          {
            id: "streetAddress",
            type: "text",
            label: "Street Address",
            defaultValue: "",
            width: 3,
            options: {
              required: "This field is required",
            },
          },
          {
            id: "city",
            type: "text",
            label: "City",
            defaultValue: "",
            width: 3,
            options: {
              required: "This field is required",
            },
          },
          {
            id: "state",
            type: "text",
            label: "State",
            defaultValue: "",
            width: 3,
            options: {
              required: "This field is required",
            },
          },
          {
            id: "zipCode",
            type: "text",
            label: "Zip Code",
            defaultValue: "",
            width: 3,
            options: {
              required: "",
            },
          },
        ],
        route: "/wizard/step-2",
      },
      thirdStep: {
        actions: {
          BACK: "secondStep",
          NEXT: "fourthStep",
        },
        title: "Step 3",
        description:
          "We use this information to calculate fuel costs and applicable incentives",
        fields: [
          {
            id: "buildingType",
            type: "select",
            label: "Building Type",
            defaultValue: "",
            width: 6,
            dropdownOptions: [
              {
                value: "home",
                label: "Home (garage)",
              },
              {
                value: "smallOffice",
                label: "Small Office",
              },
              {
                value: "largeOffice",
                label: "Large Office",
              },
              {
                value: "warehouse",
                label: "Wharehouse",
              },
              {
                value: "depot",
                label: "Depot",
              },
              {
                value: "school",
                label: "Apartment Building",
              },
            ],
            options: {
              required: "This field is required",
            },
          },
        ],
        route: "/wizard/step-3",
      },
      fourthStep: {
        actions: {
          BACK: "thirdStep",
          NEXT: "summary",
        },
        title: "Step 4",
        description:
          "We use this information to calculate fuel costs and applicable incentives",
        fields: [
          {
            id: "buildingType",
            type: "select",
            label: "Building Type",
            defaultValue: "",
            width: 6,
            dropdownOptions: [
              {
                value: "home",
                label: "Home (garage)",
              },
              {
                value: "smallOffice",
                label: "Small Office",
              },
              {
                value: "largeOffice",
                label: "Large Office",
              },
              {
                value: "warehouse",
                label: "Wharehouse",
              },
              {
                value: "depot",
                label: "Depot",
              },
              {
                value: "school",
                label: "Apartment Building",
              },
            ],
            options: {
              required: "This field is required",
            },
          },
        ],
        route: "/wizard/step-4",
      },
      summary: {
        actions: {
          BACK: "fourthStep",
          SUBMIT: { actions: "submit" },
        },
        title: "Step 4",
        description:
          "We use this information to calculate fuel costs and applicable incentives",
        route: "/wizard/review",
        nextLabel: "Submit",
      },
    },
    actions: {
      navigate: (route: string) => {
        navigate(route);
      },
      submit: (data: WizardContext) => {
        alert(JSON.stringify(data));
      },
    },
  };

  return <Wizard configuration={wizardConfiguration} styles={wizardDarkMode} />;
}

export default WizardPage;
