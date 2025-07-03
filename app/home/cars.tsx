import Background from "@/components/Background";
import cars from "@/data/cars";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const hpRanges = ["100-199", "200-299", "300-399", "400-499", "500+"];

// Típus a car objektumokra
type Car = (typeof cars)[number];

export default function CarsScreen() {
  const { brand } = useLocalSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState<"buy" | "rent">("buy");
  const [sortBy, setSortBy] = useState<
    "priceDesc" | "priceAsc" | "yearDesc" | "yearAsc" | "brandAsc" | "brandDesc"
  >("priceDesc");
  const [sortModalVisible, setSortModalVisible] = useState(false);

  useEffect(() => {
    if (brand && typeof brand === "string") {
      setSelectedBrand(brand);
      setApplyFilter(true);
    }
  }, [brand]);

  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedFuel, setSelectedFuel] = useState<string>("all");
  const [selectedBody, setSelectedBody] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedHP, setSelectedHP] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const [applyFilter, setApplyFilter] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { label: "Price ↓ (High to Low)", value: "priceDesc" },
    { label: "Price ↑ (Low to High)", value: "priceAsc" },
    { label: "Year ↓ (Newest)", value: "yearDesc" },
    { label: "Year ↑ (Oldest)", value: "yearAsc" },
    { label: "Brand A-Z", value: "brandAsc" },
    { label: "Brand Z-A", value: "brandDesc" },
  ];

  const uniqueValues = <K extends keyof Car>(key: K): Car[K][] =>
    Array.from(
      new Set(cars.filter((car) => car.type === filter).map((car) => car[key]))
    );

  const filteredAndSortedCars = cars
    .filter((car) => car.type === filter)
    .filter((car) => {
      if (applyFilter) {
        const withinBrand =
          selectedBrand === "all" || car.brand === selectedBrand;
        const withinFuel = selectedFuel === "all" || car.fuel === selectedFuel;
        const withinBody = selectedBody === "all" || car.body === selectedBody;
        const withinStatus =
          selectedStatus === "all" || car.status === selectedStatus;
        const withinHP =
          selectedHP === "all" ||
          (() => {
            const hp = car.horsepower;
            if (selectedHP === "500+") return hp >= 500;
            const [min, max] = selectedHP.split("-").map(Number);
            return hp >= min && hp < max;
          })();
        const price = car.price;
        const minP = minPrice ? parseInt(minPrice) : 0;
        const maxP = maxPrice ? parseInt(maxPrice) : Infinity;
        const year = car.year;
        const minY = minYear ? parseInt(minYear) : 0;
        const maxY = maxYear ? parseInt(maxYear) : new Date().getFullYear();
        return (
          withinBrand &&
          withinFuel &&
          withinBody &&
          withinStatus &&
          withinHP &&
          price >= minP &&
          price <= maxP &&
          year >= minY &&
          year <= maxY
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "yearAsc":
          return a.year - b.year;
        case "yearDesc":
          return b.year - a.year;
        case "brandAsc":
          return a.brand.localeCompare(b.brand);
        case "brandDesc":
          return b.brand.localeCompare(a.brand);
        default:
          return 0;
      }
    });

  const renderChipScroll = (
    label: string,
    selected: string,
    values: string[],
    setter: (val: string) => void
  ) => (
    <View>
      <Text className="text-white text-lg">{label}:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-2 max-h-16"
      >
        {["all", ...values].map((val) => (
          <Pressable
            key={val}
            onPress={() => setter(val)}
            className={`mr-2 px-4 py-1 rounded-full border ${
              selected === val ? "bg-blue-600 border-blue-400" : "border-white"
            }`}
          >
            <Text className="text-white text-lg capitalize">{val}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <Background>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 pt-6"
      >
        <Text className="text-white text-3xl font-bold my-16 text-center">
          Cars Available
        </Text>

        <View className="flex-row justify-between mb-4 gap-4">
          <FilterButton
            label="Buy"
            selected={filter === "buy"}
            onPress={() => setFilter("buy")}
          />
          <FilterButton
            label="Rent"
            selected={filter === "rent"}
            onPress={() => setFilter("rent")}
          />
        </View>

        <View className="py-2 mb-4">
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              setShowFilters((prev) => !prev);
            }}
            className="bg-purple-700 px-4 py-2 rounded-xl"
          >
            <Text className="text-white text-lg text-center font-semibold">
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Text>
          </Pressable>
        </View>

        {showFilters && (
          <ScrollView className="mb-10 gap-2" nestedScrollEnabled={true}>
            {renderChipScroll(
              "Brand",
              selectedBrand,
              uniqueValues("brand"),
              setSelectedBrand
            )}
            {renderChipScroll(
              "Fuel Type",
              selectedFuel,
              uniqueValues("fuel"),
              setSelectedFuel
            )}
            {renderChipScroll(
              "Body Type",
              selectedBody,
              uniqueValues("body"),
              setSelectedBody
            )}
            {renderChipScroll(
              "Condition",
              selectedStatus,
              uniqueValues("status"),
              setSelectedStatus
            )}
            {renderChipScroll(
              "Horsepower",
              selectedHP,
              hpRanges,
              setSelectedHP
            )}

            <Text className="text-white text-lg">Price (€):</Text>
            <View className="flex-row gap-2">
              <TextInput
                placeholder="Min"
                placeholderTextColor="#ccc"
                value={minPrice}
                onChangeText={setMinPrice}
                keyboardType="numeric"
                className="bg-white/10 text-white rounded-md p-4 flex-1"
              />
              <TextInput
                placeholder="Max"
                placeholderTextColor="#ccc"
                value={maxPrice}
                onChangeText={setMaxPrice}
                keyboardType="numeric"
                className="bg-white/10 text-white rounded-md p-4 flex-1"
              />
            </View>

            <Text className="text-white text-lg">Year:</Text>
            <View className="flex-row gap-2">
              <TextInput
                placeholder="Min"
                placeholderTextColor="#ccc"
                value={minYear}
                onChangeText={setMinYear}
                keyboardType="numeric"
                className="bg-white/10 text-white rounded-md p-4 flex-1"
              />
              <TextInput
                placeholder="Max"
                placeholderTextColor="#ccc"
                value={maxYear}
                onChangeText={setMaxYear}
                keyboardType="numeric"
                className="bg-white/10 text-white rounded-md p-4 flex-1"
              />
            </View>

            <View className="flex-col gap-4 justify-center items-center mt-6">
              <Pressable
                onPress={() => setApplyFilter(true)}
                className="bg-green-600 w-1/2 px-4 py-2 rounded-lg"
              >
                <Text className="text-white text-center text-lg font-semibold">
                  Apply Filter
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedBrand("all");
                  setSelectedFuel("all");
                  setSelectedBody("all");
                  setSelectedStatus("all");
                  setSelectedHP("all");
                  setMinPrice("");
                  setMaxPrice("");
                  setMinYear("");
                  setMaxYear("");
                  setApplyFilter(false);
                }}
                className="bg-red-600/80 w-1/3 px-4 py-2 rounded-lg"
              >
                <Text className="text-white text-center text-lg font-semibold">
                  Reset
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        )}

        <View className="mb-4 flex-row justify-between items-center gap-2 flex-wrap">
          <Text className="text-white text-xl">
            Cars shown: {filteredAndSortedCars.length}
          </Text>
          <Pressable
            onPress={() => setSortModalVisible(true)}
            className="bg-white/10 px-4 py-2 rounded-lg"
          >
            <Text className="text-white text-lg">
              {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </Text>
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={{ gap: 32, paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredAndSortedCars.map((car) => (
            <Pressable
              key={car.id}
              onPress={() => router.push(`/home/carpage?id=${car.id}`)}
              className="bg-white/10 rounded-lg overflow-hidden"
            >
              <View className="w-full aspect-[16/9] bg-black">
                <Image
                  source={car.image1}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex-row justify-between items-center">
                  <Text className="text-white text-sm">
                    {car.year} {car.brand} {car.model}
                  </Text>
                  <Text className="text-green-400 text-sm font-bold">
                    {car.price.toLocaleString("de-DE")}
                    {car.type === "rent" ? " € / Day" : " €"}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Modal visible={sortModalVisible} animationType="slide" transparent>
          <View className="flex-1 justify-center items-center bg-black/80">
            <View className="bg-white w-80 rounded-3xl p-6">
              <FlatList
                data={sortOptions}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="py-2"
                    onPress={() => {
                      setSortBy(item.value as typeof sortBy);
                      setSortModalVisible(false);
                    }}
                  >
                    <Text className="text-black bg-purple-200 rounded-xl py-2 px-4 text-lg">
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setSortModalVisible(false)}>
                <Text className="text-xl py-2 rounded-xl text-center bg-red-500 text-white mt-4">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Background>
  );
}

function FilterButton({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-[48%] px-4 py-4 rounded-3xl ${
        selected ? "bg-blue-600" : "bg-white/10"
      }`}
    >
      <Text className="text-white text-center text-xl font-medium">
        {label}
      </Text>
    </Pressable>
  );
}
