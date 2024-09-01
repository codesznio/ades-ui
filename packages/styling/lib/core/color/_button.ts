export interface ButtonColorProps {
    background: {
        base: string
        hover: string
        disabled: string
    }
    border: {
        base: string
        hover: string
        disabled: string
    }
    text: {
        base: string
        hover: string
        disabled: string
    }
}

export const buttonColor: ButtonColorProps = {
    background: {
        base: '#32353C',
        hover: '#2f3138',
        disabled: '#F2F4F7',
    },
    border: {
        base: '#32353C',
        hover: '#2f3138',
        disabled: '#EAECF0',
    },
    text: {
        base: '#FFFFFF',
        hover: '#FFFFFF',
        disabled: '#98A2B3',
    },
}
