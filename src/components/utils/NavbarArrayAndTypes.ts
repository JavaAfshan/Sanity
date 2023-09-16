export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>
};

export const NavbarArray:Array<NavbarItemType>=[
    {
          label:"Female",
          href:"/female",
          isDropDown:true,
          dropDownData:[
            {
                label:"shirts",
                href:"/female/shirts",
                isDropDown:false
            },
            {
                label:"pants",
                href:"/female/pants",
                isDropDown:false
            },
            {
                label:"dresses",
                href:"/female/dresses",
                isDropDown:false
            },
            {
                label:"jackets",
                href:"/female/jackets",
                isDropDown:false
            },
          ]
    },
    {
        label:"Male",
        href:"/male",
        isDropDown:true,
        dropDownData:[
            {
                label:"shirts",
                href:"/male/shirts",
                isDropDown:false
            },
            {
                label:"pants",
                href:"/male/pants",
                isDropDown:false
            },
            {
                label:"dresses",
                href:"/male/dresses",
                isDropDown:false
            },
            {
                label:"jackets",
                href:"/male/jackets",
                isDropDown:false
            },
          ]
    },
    {
        label:"Kids",
        href:"/kid",
        isDropDown:false
    },
    {
        label:"All Products",
        href:"/products",
        isDropDown:false
    }
]