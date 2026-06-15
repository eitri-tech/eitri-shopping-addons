import { Text, View, Page } from "eitri-luminus";
import HeaderComponent from "../components/HeaderComponent";

export default function Reviews(props) {
  return (
    <Page className="w-screen h-screen">
      <View className="pt-8 w-full h-full">
        <HeaderComponent title="Reviews RA/TrustVox" />

        <View className="flex flex-col w-full p-6">
          <Text render="p">Conteúdo da tela de Reviews RA/TrustVox.</Text>
        </View>
      </View>
    </Page>
  );
}
