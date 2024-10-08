
export const host=`${process.env.REACT_APP_Server_URL}`;
export const SignupRoute=`${host}/api/auth/adminSignup`;
export const LoginRoute =`${host}/api/auth/adminLogin`;

//products
export const Getproducts=`${host}/api/products/showall_products`;
export const UpdateProduct= `${host}/api/products/edit_products`;
export const DelProduct= `${host}/api/products/del_products`;
export const Add_Product=`${host}/api/products/add_products`;
export const get_product=`${host}/api/products/get_product`;
export const Upload_Images=`${host}/api/products/Upload_Images`;   
export const get_sorted_product=`${host}/api/products/get_sorted_product`;
export const All_products=`${host}/api/products/All_products`;

//catergories
export const Add_Categories=`${host}/api/products/Add_Categories`
export const Getall_Categories=`${host}/api/products/Getall_Categories`
export const del_categories= `${host}/api/products/del_categories`
export const get_category=`${host}/api/products/get_category`
export const edit_categories=`${host}/api/products/edit_categories`

//properties
export const Add_Properties=`${host}/api/products/Add_Properties`
export const del_Properties= `${host}/api/products/del_Properties`
export const edit_Properties=`${host}/api/products/edit_Properties`
export const Getall_properties=`${host}/api/products/Getall_properties`
export const get_property=`${host}/api/products/get_property`

//cart
export const getcartproduct=`${host}/api/Cart/getcartproduct`
export const getcartProperties=`${host}/api/Cart/getcartProperties`
export const addCart=`${host}/api/Cart/addCart`
export const getcarts=`${host}/api/Cart/getcarts`
export const getImg=`${host}/api/Cart/getImg`



//Customization
export const Getfeaturedproducts=`${host}/api/Custom/Getfeaturedproducts`
