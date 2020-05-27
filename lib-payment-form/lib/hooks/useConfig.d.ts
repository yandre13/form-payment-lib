/// <reference types="react" />
declare const useConfig: () => {
    cardConfig: {
        activeCard: boolean;
        activeButton: boolean;
        setActiveCard: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        setActiveButton: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        kindOfCard: any;
        dataInfo: {
            cardNumber: string;
            name: string;
            ccv: string;
            expiryDate: string;
        };
    };
    formConfig: {
        setActiveCard: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        activeButton: boolean;
        validCardNumber: any;
        validExpiryDate: any;
        validName: any;
        validCcv: any;
        handleChangeCardNumber: (e: React.FormEvent<HTMLInputElement>) => void;
        handleBlurCardNumber: () => void;
        handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void;
        handleBlurName: (e: React.FormEvent<HTMLInputElement>) => void;
        handleChangeCcv: (e: React.FormEvent<HTMLInputElement>) => void;
        handleBlurCcv: (e: React.FormEvent<HTMLInputElement>) => void;
        handleChangeExpiryDate: (e: React.FormEvent<HTMLInputElement>) => void;
        handleBlurExpiryDate: (e: React.FormEvent<HTMLInputElement>) => void;
        dataInfo: {
            cardNumber: string;
            name: string;
            ccv: string;
            expiryDate: string;
        };
    };
};
export default useConfig;
