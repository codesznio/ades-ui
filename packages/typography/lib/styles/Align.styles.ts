import { ContentAlignType } from '@/types/ContentAlign.type'

class Align {
    align(align: ContentAlignType): string {
        switch (align) {
            case ContentAlignType.CENTER:
                return `
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                `
            case ContentAlignType.RIGHT:
                return `
                    text-align: right;
                    align-items: flex-end;
                    justify-content: flex-end;
                `
            case ContentAlignType.LEFT:
            default:
                return `
                    text-align: left;
                    align-items: flex-start;
                    justify-content: flex-start;
                `
        }
    }
}

export const AlignStyles = new Align()
