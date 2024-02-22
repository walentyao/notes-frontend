import classes from './MasonryTable.module.scss';
import { useObserverResize } from '@/shared/hooks/useObserverResize';
import React, { CSSProperties, ReactNode, useRef, useState } from 'react';
import { convertArrayTo2DArray } from '@/shared/lib/convertArrayTo2DArray.ts';

type Props = {
    children: ReactNode;
    widthColumn: number;
};
export const MasonryTable = ({ children, widthColumn }: Props) => {
    const masonryRef = useRef<HTMLDivElement>(null);
    const [countColumn, setCountColumn] = useState(0);

    const itemsInCeil: ReactNode[] = [];
    React.Children.forEach(children, (child) => {
        itemsInCeil.push(child);
    });

    // TODO Оптимизировать

    const twoDimensionArrayChildren = convertArrayTo2DArray(itemsInCeil, countColumn);

    useObserverResize<HTMLDivElement>(masonryRef, (widthElement) => {
        const newCountColumn = Math.floor(widthElement / (widthColumn + 20));
        if (countColumn != newCountColumn) setCountColumn(newCountColumn);
    });

    return (
        <div
            className={classes.masonry}
            ref={masonryRef}
            style={{ '--width-column': widthColumn.toString() + 'px' } as CSSProperties}
        >
            {twoDimensionArrayChildren.map((child, index) => {
                return (
                    <div
                        className={classes.masonry__column}
                        key={index}
                    >
                        {child.map((child) => child)}
                    </div>
                );
            })}
        </div>
    );
};
