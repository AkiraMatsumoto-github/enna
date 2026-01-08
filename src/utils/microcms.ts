import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type News = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    category: string[];
    published: string; // User defined date field
};

export type NewsResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: News[];
};

export const getNews = async (queries?: MicroCMSQueries) => {
    return await client.get<NewsResponse>({ endpoint: "news", queries });
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<News>({
        endpoint: "news",
        contentId,
        queries,
    });
};
