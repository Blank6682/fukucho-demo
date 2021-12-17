export default function getElementPosition(el:HTMLElement|null):DOMRect |undefined{
    return el?.getBoundingClientRect()
}