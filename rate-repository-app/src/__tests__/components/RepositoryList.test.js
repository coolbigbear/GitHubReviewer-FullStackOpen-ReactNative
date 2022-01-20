import { RepositoryListContainer } from '../../components/RespositoryList';
import { render } from '@testing-library/react-native';
import React from 'react';
import formatForThousands from '../../utils/numberFormatter';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            // Add your test code here
            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

            const expectedRepos = [repositories.edges[0].node, repositories.edges[1].node];

            const repositoryItems = getAllByTestId('repositoryItem');
            expect(repositoryItems).toHaveLength(2);
            
            expectedRepos.forEach((element, index) => {
                expect(repositoryItems[index]).toHaveTextContent(element.fullName);
                expect(repositoryItems[index]).toHaveTextContent(element.description);
                expect(repositoryItems[index]).toHaveTextContent(element.language);
            });
            
            const repositoryItemStatistics = getAllByTestId('repositoryItemStatistic');
            
            expectedRepos.forEach((element, index) => {
                expect(repositoryItemStatistics[index].children[0].children[0]).toHaveTextContent('Stars');
                expect(repositoryItemStatistics[index].children[0].children[0]).toHaveTextContent(formatForThousands(element.stargazersCount));
                expect(repositoryItemStatistics[index].children[1].children[0]).toHaveTextContent('Forks');
                expect(repositoryItemStatistics[index].children[1].children[0]).toHaveTextContent(formatForThousands(element.forksCount));
                expect(repositoryItemStatistics[index].children[2].children[0]).toHaveTextContent('Reviews');
                expect(repositoryItemStatistics[index].children[2].children[0]).toHaveTextContent(formatForThousands(element.reviewCount));
                expect(repositoryItemStatistics[index].children[3].children[0]).toHaveTextContent('Rating');
                expect(repositoryItemStatistics[index].children[3].children[0]).toHaveTextContent(formatForThousands(element.ratingAverage));
            });
        });
    });
});