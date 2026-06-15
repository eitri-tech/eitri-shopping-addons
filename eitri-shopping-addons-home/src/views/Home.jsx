import Eitri from "eitri-bifrost";
import { Text, View, Button, Page } from "eitri-luminus";
import HeaderComponent from "../components/HeaderComponent";

export default function Home(props) {
  return (
    <Page className="w-screen h-screen">
      <View className="flex flex-col w-full h-full pt-8">
        <HeaderComponent title="Eitri Shopping Addons" showBack={false} />

        <View className="flex flex-col w-full p-6">
          <Text render="p" className="mb-8">
            Este projeto traz informações sobre os addons disponíveis para aplicativos usando Eitri Shopping e exemplos de componentes pré prontos para integrações com diversos providers.
          </Text>

          <Text render="h2" className="text-2xl font-bold mb-4">
            Avaliable Addons
          </Text>

          <View className="flex flex-col gap-4 w-full mb-8">
            <Button
              className="btn btn-secondary w-full"
              onClick={async () =>
                await Eitri.openBrowser({ url: "https://github.com/eitri-tech/eitri-shopping-addons-vtex-ads", inApp: true })
              }
            >
              Vtex Ads
            </Button>

            <Button
              className="btn btn-secondary w-full"
              onClick={async () =>
                await Eitri.openBrowser({ url: "https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver", inApp: true })
              }
            >
              Vtex Deeplink Resolver
            </Button>

            <Button
              className="btn btn-secondary w-full"
              onClick={async () =>
                await Eitri.openBrowser({ url: "https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver-wake", inApp: true })
              }
            >
              Wake Deeplink Resolver
            </Button>

            <Button
              className="btn btn-secondary w-full"
              onClick={async () =>
                await Eitri.openBrowser({ url: "https://github.com/eitri-tech/eitri-shopping-addons-deeplink-resolver-shopify", inApp: true })
              }
            >
              Shopify Deeplink Resolver
            </Button>
          </View>

          {/* Component Snippets — comentado até a seção estar pronta
          <Text render="h2" className="text-2xl font-bold mb-8">
            Component Snippets
          </Text>

          <View className="flex flex-col gap-4 w-full">
            <Button
              className="btn btn-primary w-full"
              onClick={async () =>
                await Eitri.navigation.navigate({ path: "/Reviews" })
              }
            >
              Reviews RA/TrustVox
            </Button>

            <Button
              className="btn btn-primary w-full"
              onClick={async () =>
                await Eitri.navigation.navigate({ path: "/SizeBay" })
              }
            >
              SizeBay Recomendations
            </Button>
          </View>
          */}
        </View>
      </View>
    </Page>
  );
}
