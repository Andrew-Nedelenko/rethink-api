use blogdb;

CREATE TABLE IF NOT EXISTS category
(categoryId int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    categoryName varchar(255),
    createdCategory DATETIME NOT NULL DEFAULT NOW(), 
    updatedCategory DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (categoryId)
);

CREATE TABLE IF NOT EXISTS articles
(articleId int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    title varchar(255),
    content LONGTEXT,
    categoryKey int(11) UNSIGNED NOT NULL,
    author varchar(255),
    createdArticle DATETIME NOT NULL DEFAULT NOW(), 
    updatedArticle DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY (articleId),
    FOREIGN KEY (categoryKey) REFERENCES category (categoryId)
);