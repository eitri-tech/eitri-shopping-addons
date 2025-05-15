import { useTranslation } from "eitri-i18n";
import Eitri from "eitri-bifrost";
import { Text, View, Image, Button, Page, Carousel } from "eitri-luminus";
import HeaderComponent from "../components/HeaderComponent";
import Presentation from "../assets/images/presentation.webp";
import AddonService from "../services/AddonService";

export default function Home(props) {
  const { t } = useTranslation();
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    fetchAddons();
  }, []);

  const requestData = {
    context: "search",
    term: "teste",
    user_id: "6a746448-cf59-42bc-aa3d-a426844ad115",
    session_id: "f361661f-5986-4779-9009-a34562f18347",
    placements: {
      bannerhome: { quantity: 1, size: "200x200", types: ["banner"] },
    },
  };

  // Verificar formato do result com mais de um banner
  const fetchAddons = async () => {
    try {
      const result = await AddonService.getAddons(requestData);
      await setAddons(result.bannerhome);
      await sendImpression(result.bannerhome.impression_url);
      console.log("Addons fetched successfully:", result.bannerhome);
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  const sendImpression = async (impressionUrl) => {
    const data = {
      userId: "6a746448-cf59-42bc-aa3d-a426844ad115",
      sessionId: "f361661f-5986-4779-9009-a34562f18347",
    };
    await AddonService.sendImpression(impressionUrl, data);
  }

  const sendView = async (viewUrl) => {
    const data = {
      userId: "6a746448-cf59-42bc-aa3d-a426844ad115",
      sessionId: "f361661f-5986-4779-9009-a34562f18347",
    };
    await AddonService.sendView(viewUrl, data);
  }

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

          <Carousel
            config={{
              showArrows: true,
              showIndicators: true,
              snapTo: 'center',
              loop: true,
              autoPlay: true,
              interval: 3000,
            }}
          >
            {addons.map((image) => (
              <Carousel.Item key={image.campaign_name} className="w-full flex justify-center items-center">
                <View onClick={async () => await Eitri.openBrowser({ url: image.click_url })} >
                  <Image
                    src={image.media_url}
                    alt={image.name}
                    onLoad={() => {
                      sendView(image.view_url);
                      console.log("View URL sent:", image.view_url);
                    }}
                  />
                </View>
              </Carousel.Item>
            ))}
          </Carousel>


          <Button
            className="btn btn-secondary mt-16 w-full"
            onClick={async () =>
              await Eitri.navigation.navigate({ path: "Products/Products" })
            }
          >
            {t("home.button")}
          </Button>
        </View>
      </View>
    </Page>
  );
}
