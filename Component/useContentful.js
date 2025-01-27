import axios from 'axios';
import {createClient} from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'j1j82ynxb827',
    accessToken: '-zw8-Ya8JBnqhGeSuTFZ-e_Z3PExis5QUkHNwDzKelo',
    host: 'preview.contentful.com',
  });
  const getAuthors = async () => {
    try {
      console.log('true');
      const entries =
        
         await client.getEntries({
          content_type: 'componentSeo',
          select: 'fields',
        })

        
/*
        const fetchContentfulData = async () => {
            try {
              const response = await axios.get(
                'https://cdn.contentful.com/spaces/j1j82ynxb827/environments/master/entries',
                {
                  params: {
                    access_token: 'o_4B6hA2enZmrI2MRHgHQgM94k2S6gK-oaYeI85QSok',
                  },
                }
              );
          
              console.log('Contentful Data:', response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          
          fetchContentfulData();

*/
      const filtered = entries.items.map(item => {
        const url1 = item.fields.shareImages[0].fields.file.url;
        
        return {
          ...item.fields,
          url1,
          
        };
      });
      return filtered;
    } catch (error) {
      console.log(error);
    }
  };
  return {getAuthors};
};
export default useContentful;