import {
  createContext,
  useContext,
  useState,
} from "react";

const BirthdayExperienceContext = createContext(null);

export function BirthdayExperienceProvider({ children }) {
  const [scene, setScene] = useState("intro");

  const [giftOpened, setGiftOpened] = useState(false);

  const [wishMode, setWishMode] = useState(false);

  const [celebration, setCelebration] = useState(false);

  const openGift = () => {
    setGiftOpened(true);

    setTimeout(() => {
      setScene("memories");
    }, 4200);
  };

  const startWish = () => {
    setWishMode(true);
  };

  const completeWish = () => {
    setWishMode(false);
    setCelebration(true);

    setTimeout(() => {
      setScene("final");
    }, 5000);
  };

  return (
    <BirthdayExperienceContext.Provider
      value={{
        scene,
        setScene,

        giftOpened,
        openGift,

        wishMode,
        startWish,
        completeWish,

        celebration,
      }}
    >
      {children}
    </BirthdayExperienceContext.Provider>
  );
}

export function useBirthdayExperience() {
  const context = useContext(BirthdayExperienceContext);

  if (!context) {
    throw new Error(
      "useBirthdayExperience must be used inside BirthdayExperienceProvider"
    );
  }

  return context;
}