import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {withPrefix, Link, markdownify} from '../utils';
import BlogPostCategories from '../components/BlogPostCategories';
import BlogPostTags from '../components/BlogPostTags';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post">
              <div className="container container--md">
                {_.get(this.props, 'page.image', null) && (
                <div className="post__image">
                  <img src={withPrefix(_.get(this.props, 'page.image', null))} alt={_.get(this.props, 'page.title', null)} />
                </div>
                )}
                <header className="post__header">
                  {_.get(this.props, 'page.categories', null) && (
                    <BlogPostCategories {...this.props} categories={_.get(this.props, 'page.categories', null)} container_class={'post__meta'} />
                  )}
                  <h1 className="post__title">{_.get(this.props, 'page.title', null)}</h1>
                  <div className="post__meta">
                    <span>On <time dateTime={moment(_.get(this.props, 'page.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.date', null)).strftime('%B %d, %Y')}</time></span>
                    {_.get(this.props, 'page.author', null) && ((() => {
                        let author = _.get(this.props, 'page.author', null);
                        return (
                          author.link ? (
                            <span> by <Link href={withPrefix(author.link)}>{author.first_name} {author.last_name}</Link></span>
                          ) : 
                            <span> by {author.first_name} {author.last_name}</span>
                        );
                    })())}
                  </div>
                </header>
                <div className="post__copy">
                  {markdownify(_.get(this.props, 'page.content', null))}
                </div>
                {_.get(this.props, 'page.tags', null) && (
                <footer className="post__footer">
                  <BlogPostTags {...this.props} tags={_.get(this.props, 'page.tags', null)} />
                </footer>
                )}
              </div>
            </article>
            </Layout>
        );
    }
}
