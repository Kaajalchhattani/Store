import {createClient} from 'contentful';

const useContentful2 = () => {
  const client = createClient({
    space: 'j1j82ynxb827',
    accessToken: '-zw8-Ya8JBnqhGeSuTFZ-e_Z3PExis5QUkHNwDzKelo',
    host: 'preview.contentful.com',
  });
  const getImage = async () => {
    try {
      console.log('true');
      
      const entries = 
        await client.getEntries({
            content_type: 'slider1',
            select: 'fields',
          })
         
          

console.log(entries)


      const filtered = entries.items.map(item => {
        
        const url2=item.fields.image.fields.file.url;
        const title=item.fields.image.fields.title;
        console.log(url2,title,"kk")
        return {
          ...item.fields,
        
          url2,
          title,
        };
        
      });
      return filtered;
    } catch (error) {
      console.log(error);
    }
  };
  return {getImage};
};
export default useContentful2;