CREATE TABLE [dbo].[GigEntity] (
    [GigId]     INT              IDENTITY (1, 1) NOT NULL,
    [OwnerId]   UNIQUEIDENTIFIER NOT NULL,
    [VenueName] NVARCHAR (MAX)   NOT NULL,
    [Date]      DATETIME         NOT NULL,
    [City]      NVARCHAR (MAX)   NOT NULL,
    [State]     NVARCHAR (MAX)   NOT NULL,
    [Zip]       NVARCHAR (MAX)   NOT NULL,
    CONSTRAINT [PK_dbo.GigEntity] PRIMARY KEY CLUSTERED ([GigId] ASC)
);