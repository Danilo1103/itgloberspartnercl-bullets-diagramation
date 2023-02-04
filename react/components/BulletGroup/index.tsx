import React, { PropsWithChildren } from "react";
import { BulletsSchema } from "./BulletTypes";
import { useDevice } from "vtex.device-detector";
import { useListContext } from "vtex.list-context";
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

    console.log("Bullets", bullets)

    const bulletsGroup = getBulletsAlTSXList(bullets)

    if (false) {
        console.log(children, list)
    }

    return (
        isMobile ?
            <div>
                Estamos en mobile
            </div>
            :
            <div>
                {bulletsGroup}
            </div>
    )
}

export default BulletGroup;