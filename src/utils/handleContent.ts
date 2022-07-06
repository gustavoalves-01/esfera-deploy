import slugify from "slugify";
import { CategoryInterface } from "../entities/Category";
import { FullPostInterface, PostPreviewInterface, PostShortcutsInterface, RawPost, RawPostPreview } from "../entities/Post";
import handleCategory from "./handleCategories";

const handlePostPreview = (data: any, categories: CategoryInterface[]) => {
  const postList: PostPreviewInterface[] = data.map(
    (post: RawPostPreview) => {
      const excerptRegex = /<p>|<\/p>|(\[\&)(.*)(\;\])/g;
      const excerpt = post.excerpt.rendered.replace(excerptRegex, '');

      return {
        id: post.id,
        date: new Date(post.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        title: post.title.rendered,
        excerpt: excerpt,
        slug: post.slug,
        categories: post.categories.map((item: number) => {
          return handleCategory(item, categories);
        }),
        tags: String(post.tags),
        imageURL: post.yoast_head_json.og_image[0].url,
        highlight: String(post.tags).includes('3'),
      };
    }
  );

  return postList;
};

const handlePostData = (data: any, categories: CategoryInterface[]) => {
  const fullPost: FullPostInterface = data.map((post: RawPost) => {
    return {
      id: post.id,
      title: post.title.rendered,
      author: post.author,
      categories: post.categories.map((item) => {
        return handleCategory(item, categories);
      }),
      content: post.content.rendered.replace(/<[\/]{0,1}(div)[^><]*>/g, '').replace(/<[\/]{0,1}(span)[^><]*>/g, ''),
      imageURL: post.yoast_head_json.og_image[0].url,
      createdAt: post.date,
      slug: post.slug,
    };
  })[0];

  return fullPost;
}

const removeAttributes = (element: Element) => {
  Array.from(element.attributes).forEach((attr) => {
    switch (attr.name) {
      case 'id':
        if (element.tagName === 'H2' || element.tagName === 'SECTION') {
          break;
        }
      case 'src':
        break;
      case 'target':
        break;
      case 'href':
        break;
      default:
        element.attributes.removeNamedItem(attr.name);
        break;
    }
  });
};

const handlePostContent = (content: string) => {
  const element = document.createElement('div');
  element.innerHTML = content;

  // Removing Elements Attributes (except iframes)
  element.querySelectorAll('*:not(iframe)').forEach((el) => {
    removeAttributes(el);
  });

  // Setting slug as sections IDs
  element.querySelectorAll('h2').forEach((title) => {
    const slug = slugify(title.innerText, { lower: true });
    title.id = slug;
  });

  // Wrapping iframes
  element.querySelectorAll('iframe').forEach((iframe) => {
    iframe.outerHTML = '<div class="iframeContainer">' + iframe.outerHTML + '</div>'
    // const container = document.createElement('div');
    // container.classList.add('iframeContainer');

    // el.insertAdjacentElement('beforebegin', container);
    // container.insertAdjacentElement('afterbegin', el);
  });


  function getShortcuts() {
    const shortcuts: PostShortcutsInterface[] = Array.from(element.querySelectorAll('h2'))
      .map((heading) => {
        return {
          name: heading.innerText,
          slug: heading.id,
        };
      });

    return shortcuts;
  }

  function getAuthor() {
    const sections = element.querySelectorAll('section');
    const lastSection = sections[sections.length - 1];
    const lastSectionTitle = lastSection?.children[1]?.children[0]?.innerHTML;

    if (lastSectionTitle && lastSectionTitle.indexOf('produzido') !== -1) {
      lastSection.id = 'authorSection';

      const photo = lastSection.children[0].getAttribute('src');
      const name = lastSectionTitle
        .replace('Esse texto foi produzido por&nbsp;', '')
        .replace('.', '');

      const about = lastSection?.children[2].innerHTML.replace(
        /<[\/]{0,1}(i)[^><]*>/g,
        ''
      );

      lastSection.remove();
      return (name && photo && about) ? { name, photo, about } : { name: 'Redação', photo: null, about: null };
    } else {
      return { name: 'Redação', photo: null, about: null };
    }
  }

  function placeIntermission() {
    const intermission = document.createElement('div');
    intermission.classList.add('intermissionContainer');
    intermission.innerHTML = `
    <h2>A conta de luz da sua empresa é maior que 50 mil reais por mês?</h2>
    <h3>Economize até 35% da sua conta de energia todos os meses com a gestão da Esfera Energia.</h3>
    <a href="/">Receba o contato de um consultor especialista</a>
    `;

    const titles = element.querySelectorAll('h2');

    if (titles.length >= 5) {
      element.querySelectorAll('h2').forEach((section, index) => {
        if (index === 2) {
          section.insertAdjacentElement('beforebegin', intermission);
        }
      });
    } else {
      element.querySelectorAll('h2').forEach((section, index) => {
        if (index === Math.floor(titles.length / 2)) {
          section.insertAdjacentElement('beforebegin', intermission);
        }
      });
    }

  }

  const post = {
    shortcuts: getShortcuts(),
    author: getAuthor(),
    content: element.innerHTML,
  }
  
  placeIntermission();

  return post;
}

export { handlePostPreview, handlePostData, handlePostContent };