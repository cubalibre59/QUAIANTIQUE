<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250720141034 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produit ALTER nom_article TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE produit ALTER nom_article SET NOT NULL');
        $this->addSql('COMMENT ON COLUMN produit.prix IS NULL');
        $this->addSql('COMMENT ON COLUMN produit.quantite IS NULL');
        $this->addSql('COMMENT ON COLUMN produit.nom_article IS NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE produit ALTER nom_article TYPE CHAR(255)');
        $this->addSql('ALTER TABLE produit ALTER nom_article DROP NOT NULL');
        $this->addSql('COMMENT ON COLUMN produit.nom_article IS \'chousure  rouge\'');
        $this->addSql('COMMENT ON COLUMN produit.prix IS \'ok\'');
        $this->addSql('COMMENT ON COLUMN produit.quantite IS \'nok\'');
    }
}
