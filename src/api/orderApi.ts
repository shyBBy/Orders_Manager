export const fetchOrderList = async () => {
 try {
   const response = await fetch('https://example.com/wp-json/wc/v3/orders', {
     headers: {
       Authorization: 'Basic ' + btoa('YOUR_USERNAME' + ':' + 'YOUR_PASSWORD'),
     },
   });
 
   if (response.ok) {
     const data = await response.json();
     setOrders(data);
   } else {
     console.error('Error fetching orders:', response.status);
   }
 } catch (error) {
   console.error('Error fetching orders:', error);
 }
};

