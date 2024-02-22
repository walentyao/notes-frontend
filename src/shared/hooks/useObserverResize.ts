import { RefObject, useEffect } from 'react';

/**
 *   Хук для отслеживания изменения размеров DOM элемента
 *   @param ref - ссылка на DOM элемент
 *   @param callback - функция обратного вызова, которая получает ширину DOM элемента
**/

export const useObserverResize = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (widthElement: number) => void,
) => {
    // устанавливаем обсервер на целевой DOM элемент
    useEffect(() => {
        const currentElement = ref.current;

        // создаем экземпляр ResizeObserver
        const observer = new ResizeObserver((entries) => {
            // при каждом изменении размеров (ширины и высоты)
            for (const entry of entries) {
                // получаем ширину целевого элемента и вызываем callback
                callback(entry.contentRect.width);
            }
        });
        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => (currentElement ? observer.unobserve(currentElement) : undefined);
    }, [ref, callback]);
};
