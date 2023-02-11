import React, { PropsWithChildren } from "react";
import { BulletsSchema } from "./BulletTypes";
import { useDevice } from "vtex.device-detector";
import { useListContext, ListContextProvider } from "vtex.list-context";
import { useCssHandles } from "vtex.css-handles"
import { getBulletsAlTSXList } from "./modules/bulletsAlList";

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext();

    const bulletsGroup = getBulletsAlTSXList(bullets)
    const newListContextValue = list.concat(bulletsGroup)

    const CSS_HANDLES = ["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <ListContextProvider list={newListContextValue}>
            {
                isMobile ?
                    <div className={handles.bullet__container}>
                        {bulletsGroup}
                    </div>
                    :
                    children
            }
        </ListContextProvider>
    )
}

export default BulletGroup;