-- Création de la base de données (Si inexistante)
CREATE DATABASE IF NOT EXISTS continental_bank CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE continental_bank;

-- Table `users`
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) DEFAULT NULL,
    lastName VARCHAR(255) DEFAULT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    createdAt DATETIME NOT NULL,
    lastLogin DATETIME DEFAULT NULL
);

-- Table `sessions`
CREATE TABLE IF NOT EXISTS sessions (
    id VARCHAR(36) PRIMARY KEY,
    userId VARCHAR(36) NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    createdAt DATETIME NOT NULL,
    expiresAt DATETIME NOT NULL,
    deactivatedAt DATETIME DEFAULT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Table `contacts`
CREATE TABLE IF NOT EXISTS contacts (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL
);

-- Table `newsletterSubscriptions`
CREATE TABLE IF NOT EXISTS newsletterSubscriptions (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL UNIQUE,
    isActive BOOLEAN DEFAULT TRUE,
    createdAt DATETIME NOT NULL,
    unsubscribedAt DATETIME DEFAULT NULL,
    type VARCHAR(50) DEFAULT 'newsletter'
);

-- Table `loanApplications`
CREATE TABLE IF NOT EXISTS loanApplications (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'personal_loan',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    -- Le reste des données variables stockées en JSON (car elles dépendaient d'objets flexibles NoSQL)
    details JSON DEFAULT NULL
);

-- Table `creditApplications`
CREATE TABLE IF NOT EXISTS creditApplications (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'credit',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `adviceRequests`
CREATE TABLE IF NOT EXISTS adviceRequests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    createdAt DATETIME NOT NULL,
    details JSON DEFAULT NULL
);

-- Table `governanceRequests`
CREATE TABLE IF NOT EXISTS governanceRequests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    createdAt DATETIME NOT NULL,
    details JSON DEFAULT NULL
);

-- Table `businessBankingApplications`
CREATE TABLE IF NOT EXISTS businessBankingApplications (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    companyName VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'business_banking',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `newConstructionRequests`
CREATE TABLE IF NOT EXISTS newConstructionRequests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'new_construction',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `transferRequests`
CREATE TABLE IF NOT EXISTS transferRequests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'transfer',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `careerApplications`
CREATE TABLE IF NOT EXISTS careerApplications (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'career',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `calculatorSaves`
CREATE TABLE IF NOT EXISTS calculatorSaves (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    type VARCHAR(50) DEFAULT 'calculator',
    createdAt DATETIME NOT NULL,
    details JSON DEFAULT NULL
);

-- Table `documentRequests`
CREATE TABLE IF NOT EXISTS documentRequests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'document',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);

-- Table `feedbackSubmissions`
CREATE TABLE IF NOT EXISTS feedbackSubmissions (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(191) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    type VARCHAR(50) DEFAULT 'feedback',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME DEFAULT NULL,
    details JSON DEFAULT NULL
);
