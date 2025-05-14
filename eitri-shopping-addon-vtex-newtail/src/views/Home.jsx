import { useTranslation } from "eitri-i18n";
import Eitri from "eitri-bifrost";
import { Text, View, Image, Button, Page } from "eitri-luminus";
import HeaderComponent from "../components/HeaderComponent";
import Presentation from "../assets/images/presentation.webp";
import AddonService from "../services/AddonService";

export default function Home(props) {
  const { t } = useTranslation();

  const requestData = {
    context: "search",
    term: "teste",
    user_id: "6a746448-cf59-42bc-aa3d-a426844ad115",
    session_id: "f361661f-5986-4779-9009-a34562f18347",
    placements: {
      bannerhome: { quantity: 1, size: "200x200", types: ["banner"] },
    },
  };

  const fetchAddons = async () => {
    try {
      const result = await AddonService.getAddons(requestData);
      console.log("Search result:", result);
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  const addons = fetchAddons();
  console.log("Addons:", addons);

  return (
    <Page className="w-screen h-screen">
      <View className="pt-8 w-full h-full">
        <HeaderComponent title={t("home.pageTitle")} />
        <Image className="w-screen" cover src={Presentation} />

        <View className="flex flex-col  w-screen h-full justify-between items-center p-4">
          <View className="prose">
            <Text render="h3" className="mb-12 font-bold">
              {t("home.title")}
            </Text>
            <Text render="p" className="my-8">
              {t("home.description")}
            </Text>
          </View>

          <Button
            className="btn btn-secondary mt-16 w-full"
            onClick={async () =>
              await Eitri.navigation.navigate({ path: "/Products/List" })
            }
          >
            {t("home.button")}
          </Button>
        </View>
      </View>
    </Page>
  );
}
