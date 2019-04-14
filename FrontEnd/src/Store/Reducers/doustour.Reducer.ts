import { Actions, ActionTypes } from '../Actions/chapter.Action';
import { chapter, article } from '../model';

export interface State {
    chapters: chapter[]
};

const initialState: State = {
    chapters: [{
        name: 'test',
        description: '134',
        sections: [
            {
                name: 'sec 1',
                articles: [
                    {
                        name: 'article 102',
                        number: 102,
                        content: 'boutef boutef boutef'
                    }
                ]
            }
        ]
    }]
};

export function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.chapters: {
            return { chapters: [...action.payload] };
        }
        case ActionTypes.articles: {
            let targetArticle =
                state.chapters.find((chap) => chap.name == action.payload.chapter)
                    .sections.find((sec) => sec.name == action.payload.section)
                    .articles.find((art) => art.name == action.payload.name);
            targetArticle = { ...action.payload };
            return { ...state };
        }
        default: {
            return state;
        }
    }
}

export const getAllChapters = (state: State) => state.chapters;
export const getAllArticle = (state: State) => {
    let articles: article[] = [];

    state.chapters.forEach(chap =>
        chap.sections.forEach(
            (sec) => articles = [...articles, ...sec.articles]
        ));
    return articles;
};

